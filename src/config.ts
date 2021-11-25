export enum orchestrators {
    assets,
    accounts,
    search,
}

export const apiMap = {
    backend: {
        columbus: [
            {
                url: '/columbus/app/v6/typeahead',
                method: 'GET',
            },
        ],
        petra: [
            {
                url: '/data/v3/entity/builder/top',
                method: 'GET',
            },
            {
                url: '/app/v4/project-detail',
                method: 'GET',
            },
            {
                url: '/data/v1/entity/url-shortener/long-url',
                method: 'GET',
            },
            {
                url: '/data/v1/entity/enquiry/enquiryId',
                method: 'PUT',
            },
            {
                url: '/petra/data/v3/entity/project',
                method: 'GET',
            },
            {
                url: '/petra/app/v1/mylocation',
                method: 'GET',
            },
            {
                url: '/app/v2/project-listing?selector',
                method: 'GET',
            },
            {
                url: '/data/v2/entity/resale-listing?selector',
                method: 'GET',
            },
            {
                url: '/data/v1/entity/project?selector',
                method: 'GET',
            },
            {
                url: '/app/v1/composite',
                method: 'GET',
            },
            {
                url: '/app/v1/locality',
                method: 'GET',
            },
            {
                url: '/app/v4/project-detail',
                method: 'GET',
            },
            {
                url: '/data/v1/entity/city',
                method: 'GET',
            },
            {
                url: '/data/v1/entity/suburb',
                method: 'GET',
            },
            {
                url: '/data/v1/entity/property',
                method: 'GET',
            },
            {
                url: '/data/v4/entity/project',
                method: 'GET',
            },
            {
                url: '/data/v1/similar-serving-projects',
                method: 'GET',
            },
            {
                url: '/data/v1/entity/domain',
                method: 'GET',
            },
            {
                url: '/app/v2/project-listing',
                method: 'GET',
            },
            {
                url: '/data/v3/entity/project',
                method: 'GET',
            },
            {
                url: '/data/v1/entity/locality/highest-return',
                method: 'GET',
            },
            {
                url: '/data/v1/trend/hitherto',
                method: 'GET',
            },
            {
                url: '/data/v1/entity/locality/top-rated',
                method: 'GET',
            },
            {
                url: '/data/v1/entity/locality/popular',
                method: 'GET',
            },
            {
                url: '/data/v1/entity/locality',
                method: 'GET',
            },
            {
                url: '/data/v3/entity/notification/sender',
                method: 'POST',
            },
            {
                url: '/data/v2/entity/project',
                method: 'GET',
            },
            {
                url: '/app/v1/login',
                method: 'POST',
            },
            {
                url: '/app/v1/register',
                method: 'POST',
            },
            {
                url: '/app/v1/reset-password',
                method: 'POST',
            },
        ],
        icrm: [
            {
                url: '/icrm/v1/leads/feedback-requirements',
                method: 'POST',
            },
            {
                url: '/icrm/v1/temp-enquiries',
                method: 'POST',
            },
            {
                url: '/icrm/v1/home-loan/customer-info-form/generate-otp/',
                method: 'POST',
            },
            {
                url: '/icrm/v1/home-loan/customer-info-form/reference-form',
                method: 'POST',
            },
            {
                url: '/icrm/v1/home-loan/customer-info-form/add-data',
                method: 'POST',
            },
            {
                url: '/icrm/v1/event/register',
                method: 'POST',
            },
            {
                url: '/icrm/v1/csat/validate',
                method: 'GET',
            },
            {
                url: '/sapphire/v2/client-details/',
                method: 'GET',
            },
        ],
        madrox: [
            {
                url: '/madrox/data/v1/entity/onesignal-user',
                method: 'POST',
            },
            {
                url: '/madrox/app/v1/reset-password',
                method: 'POST',
            },
            {
                url: '/userservice/app/v1/otp-on-call',
                method: 'GET',
            },
        ],
        synapse: [
            {
                url: '/synapse/v1/feedback',
                method: 'GET',
            },
            {
                url: '/synapse/v1/agent-property-feedback',
                method: 'GET',
            },
        ],
        mystique: [
            {
                url: '/mystique/v1/pt-pre-lead',
                method: 'POST',
            },
        ],
        guide: [
            {
                url: '/guide/blog/v1/postList',
                method: 'GET',
            },
        ],
        madelyne: [
            {
                url: '/madelyne/data/v1/entity/notification/unsubscribe',
                method: 'POST',
            },
        ],
    },
};
