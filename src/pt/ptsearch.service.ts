import { Injectable } from '@nestjs/common';

import { apiMap } from 'src/shared/config/apiEndpoints.config';
import { parseFieldsFromObject } from 'src/utils/parser';
import { Project } from './models/projectList';

const axios = require('axios');

@Injectable()
export class PtSearchService {
    async getAllListings(listingArgs, fieldMap): Promise<[Project]> {
        const { localityId, cityLabel, pagingStart, pagingRows, sortParams = [] } = listingArgs;
        const { domain, url } = apiMap.backend.ptPetra.projectListingApi;
        let pagingObj = {};
        let sortObj = {};
        if (pagingStart !== undefined && pagingRows !== undefined) {
            pagingObj = { paging: { start: pagingStart, rows: pagingRows } };
        }
        if (sortParams.length) {
            sortObj = { sort: sortParams };
        }
        const fieldObj = {
            fields: parseFieldsFromObject({ object: fieldMap }),
        };
        let selector = JSON.stringify({
            filters: { and: [{ equal: { cityLabel: [`${cityLabel}`] } }] },
            ...pagingObj,
            ...sortObj,
            ...fieldObj,
        });
        if (localityId) {
            selector = JSON.stringify({
                filters: {
                    and: [{ equal: { cityLabel: [`${cityLabel}`] } }, { equal: { localityId: `${localityId}` } }],
                },
                ...pagingObj,
                ...sortObj,
                ...fieldObj,
            });
        }
        const finalUrl = `http://${domain}${url}=${selector}`;
        const response = await axios.get(finalUrl);

        return response.data.data.items;
    }
}
