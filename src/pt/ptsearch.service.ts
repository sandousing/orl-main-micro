import { Injectable } from '@nestjs/common';
import { apiMap } from 'src/shared/config/apiEndpoints.config';
import { Project } from './models/projectList';

const axios = require('axios');

@Injectable()
export class PtSearchService {
    async getAllListings(listingArgs): Promise<[Project]> {
        console.log(listingArgs);
        const { localityId, cityLabel, pagingStart, pagingRows, sortParams = [] } = listingArgs;
        const { domain, url } = apiMap.backend.ptPetra.projectListingApi;
        let pagingObj = {};
        let sortObj = {};
        console.log(pagingStart, pagingRows, cityLabel, localityId);
        if (pagingStart !== undefined && pagingRows !== undefined) {
            pagingObj = { paging: { start: pagingStart, rows: pagingRows } };
        }
        if (sortParams.length) {
            sortObj = { sort: sortParams };
        }
        console.log(pagingObj);
        let selector = JSON.stringify({
            filters: { and: [{ equal: { cityLabel: [`${cityLabel}`] } }] },
            ...pagingObj,
            ...sortObj,
        });
        if (localityId) {
            selector = JSON.stringify({
                filters: {
                    and: [{ equal: { cityLabel: [`${cityLabel}`] } }, { equal: { localityId: `${localityId}` } }],
                },
                ...pagingObj,
                ...sortObj,
            });
        }
        const finalUrl = `http://${domain}${url}=${selector}`;
        const response = await axios.get(finalUrl);
        console.log(response.data.data.items.length);
        console.log(finalUrl);
        return response.data.data.items;
    }
}
