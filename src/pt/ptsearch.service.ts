import { Injectable } from '@nestjs/common';

import { apiMap } from 'src/shared/config/apiEndpoints.config';
import { parseFieldsFromObject } from 'src/utils/parser';
import { Project } from './models/projectList';

const axios = require('axios');

@Injectable()
export class PtSearchService {
    async getAllListings(cityLabel, localityId, fieldMap): Promise<[Project]> {
        const apiUrl = apiMap.backend.ptPetra.projectListingApi.url;
        const { domain } = apiMap.backend.ptPetra.projectListingApi;
        const selector = JSON.stringify({
            filters: { and: [{ equal: { cityLabel: [cityLabel] } }, { equal: { localityId: `${localityId}` } }] },
            paging: { rows: 100, start: 0 },
            sort: {},
            fields: parseFieldsFromObject(fieldMap),
        });
        const finalUrl = `http://${domain}${apiUrl}=${selector}`;
        const response = await axios.get(finalUrl);
        console.log(response.data.data.items.length);
        console.log(finalUrl);
        return response.data.data.items;
    }
}
