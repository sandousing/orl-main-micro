import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class state {
    @Field()
    stateId: number;

    @Field()
    countryId: number;

    // TBD
    @Field()
    country: string;
}

@ObjectType()
class City {
    @Field()
    id: number;

    @Field()
    authorized: boolean;

    @Field()
    label: string;

    @Field()
    status: string;

    @Field()
    northEastLatitude: number;

    @Field()
    northEastLongitude: number;

    @Field()
    southWestLatitude: number;

    @Field()
    southWestLongitude: number;

    @Field()
    centerLatitude: number;

    @Field()
    centerLongitude: number;

    @Field()
    isServing: boolean;

    @Field()
    isServingResale: boolean;

    @Field()
    overviewUrl: string;

    @Field()
    localityMaxSafetyScore: number;

    @Field()
    localityMinSafetyScore: number;

    @Field()
    localityMaxLivabilityScore: number;

    @Field()
    localityMinLivabilityScore: number;

    @Field()
    isTierOneCity: boolean;

    @Field()
    showPolygon: boolean;

    @Field(() => [Number])
    geo: number[];

    @Field()
    state: state;
}

@ObjectType()
class MainImage {
    @Field()
    id: number;

    @Field()
    imageTypeId: number;

    @Field()
    objectId: number;

    @Field()
    statusId: number;

    @Field()
    sizeInBytes: number;

    @Field()
    width: number;

    @Field()
    height: number;

    @Field()
    activeStatus: number;

    @Field()
    active: boolean;

    @Field({ nullable: true })
    title: string;

    @Field({ nullable: true })
    altText: string;
}

@ObjectType()
class Builder {
    @Field()
    id: number;

    @Field()
    name: string;

    @Field()
    displayName: string;

    @Field()
    url: string;

    @Field()
    isBuilderListed: boolean;

    @Field()
    averageDelay: number;
}

@ObjectType()
class Suburb {
    @Field()
    id: number;

    @Field()
    cityId: number;

    @Field()
    label: string;

    @Field()
    status: string;

    @Field()
    city: City;

    @Field()
    priority: number;

    @Field()
    overviewUrl: string;

    @Field()
    isDescriptionVerified: boolean;
}

@ObjectType()
class Locality {
    @Field()
    localityId: number;

    @Field()
    authorized: boolean;

    @Field()
    cityId: number;

    @Field()
    label: string;

    @Field()
    localityServing: boolean;

    @Field()
    url: string;

    @Field()
    status: string;

    @Field()
    priority: number;

    @Field()
    overviewUrl: string;

    @Field()
    relevanceScore: number;

    @Field()
    projectMaxLivabilityScore: number;

    @Field()
    projectMinLivabilityScore: number;

    @Field()
    isDescriptionVerified: boolean;

    @Field()
    localityHeroshotImageUrl: string;

    @Field()
    minAffordablePrice: number;

    @Field()
    maxAffordablePrice: number;

    @Field()
    minLuxuryPrice: number;

    @Field()
    maxBudgetPrice: number;

    @Field()
    constructionStatusId: number;

    @Field()
    suburb: Suburb;

    @Field()
    suburbId: number;
}

@ObjectType()
export class Properties {
    @Field()
    propertyId: number;

    @Field()
    projectId: number;

    @Field()
    bedrooms: number;

    @Field()
    bathrooms: number;

    @Field()
    unitType: string;

    @Field()
    unitName: string;

    @Field()
    priceCurrency: string;

    @Field()
    size: number;

    @Field()
    measure: string;

    @Field()
    URL: string;

    @Field()
    isPropertySoldOut: boolean;

    @Field({ nullable: true })
    carpetArea: number;
}

@ObjectType()
export class Project {
    @Field()
    isHotProject: boolean;

    @Field()
    isOldAgeCompatible: boolean;

    @Field()
    isProjectServing: boolean;

    @Field()
    projectFocus: boolean;

    @Field()
    reraIdExpired: boolean;

    @Field()
    projectUnderInvestigation: boolean;

    @Field()
    hideBuilderName: boolean;

    @Field()
    reraRegistrationNumber: string;

    @Field()
    isFeaturedOnHomePage: boolean;

    @Field()
    isFeaturedOnCityPage: boolean;

    @Field()
    isFeaturedOnLocalityPage: boolean;

    @Field()
    projectMainImageId: number;

    @Field()
    isFeaturedOnMakaanIq: boolean;

    @Field()
    isFeatured: boolean;

    @Field()
    isProjectFeaturedBuy: boolean;

    @Field()
    isProjectFeaturedRent: boolean;

    @Field()
    builderPackageMagicNumber: number;

    @Field()
    authorized: boolean;

    @Field()
    localityId: number;

    @Field()
    shouldDisplayPrice: boolean;

    @Field()
    locality: Locality;

    @Field()
    builderId: number;

    @Field()
    name: string;

    @Field()
    projectTypeId: number;

    @Field()
    launchDate: number;

    @Field()
    address: string;

    @Field()
    computedPriority: number;

    @Field()
    assignedPriority: number;

    @Field()
    assignedLocalityPriority: number;

    @Field()
    assignedSuburbPriority: number;

    @Field()
    possessionDate: number;

    @Field()
    firstPhaseCompletionDate: number;

    @Field()
    currentPhaseCompletionDate: number;

    @Field()
    createdDate: number;

    @Field()
    imageURL: string;

    @Field()
    URL: string;

    @Field()
    latitude: number;

    @Field()
    longitude: number;

    @Field()
    forceResale: number;

    @Field()
    minBedrooms: number;

    @Field()
    maxBedrooms: number;

    @Field()
    projectStatus: string;

    @Field()
    isResale: boolean;

    @Field()
    isPrimary: boolean;

    @Field()
    isSoldOut: boolean;

    @Field()
    totalUnits: number;

    @Field()
    sizeInAcres: number;

    @Field()
    propertySizeMeasure: string;

    @Field()
    dominantUnitType: string;

    // TBD
    @Field(() => [String])
    propertyUnitTypesCommerical: [string];

    @Field()
    localityLabelPriority: string;

    @Field()
    suburbLabelPriority: string;

    @Field()
    builderLabelPriority: string;

    @Field()
    unitTypeString: string;

    @Field(() => [String])
    distinctBedrooms: string[];

    @Field(() => [String])
    distinctBedroomsFloat: string[];

    @Field()
    imagesCount: number;

    @Field()
    hasProjectOffer: boolean;

    @Field()
    livabilityScore: number;

    @Field()
    primaryScore: number;

    @Field()
    projectLivabilityRank: number;

    @Field()
    activeStatus: string;

    @Field()
    has3DImages: boolean;

    @Field()
    resaleEnquiry: boolean;

    @Field()
    hasProjectInsightReport: boolean;

    @Field()
    projectId: number;

    // TBD
    @Field(() => [Properties])
    properties: [Properties];

    @Field(() => [String])
    propertyUnitTypes: [string];

    @Field()
    mainImage: MainImage;

    @Field()
    builder: Builder;
}
