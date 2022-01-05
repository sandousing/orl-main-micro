import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class state {
    @Field({ nullable: true })
    stateId: number;

    @Field({ nullable: true })
    countryId: number;

    // TBD
    @Field({ nullable: true })
    country: string;
}

@ObjectType()
class City {
    @Field({ nullable: true })
    id: number;

    @Field({ nullable: true })
    authorized: boolean;

    @Field({ nullable: true })
    label: string;

    @Field({ nullable: true })
    status: string;

    @Field({ nullable: true })
    northEastLatitude: number;

    @Field({ nullable: true })
    northEastLongitude: number;

    @Field({ nullable: true })
    southWestLatitude: number;

    @Field({ nullable: true })
    southWestLongitude: number;

    @Field({ nullable: true })
    centerLatitude: number;

    @Field({ nullable: true })
    centerLongitude: number;

    @Field({ nullable: true })
    isServing: boolean;

    @Field({ nullable: true })
    isServingResale: boolean;

    @Field({ nullable: true })
    overviewUrl: string;

    @Field({ nullable: true })
    localityMaxSafetyScore: number;

    @Field({ nullable: true })
    localityMinSafetyScore: number;

    @Field({ nullable: true })
    localityMaxLivabilityScore: number;

    @Field({ nullable: true })
    localityMinLivabilityScore: number;

    @Field({ nullable: true })
    isTierOneCity: boolean;

    @Field({ nullable: true })
    showPolygon: boolean;

    @Field(() => [Number], { nullable: true })
    geo: number[];

    @Field({ nullable: true })
    state: state;
}

@ObjectType()
class MainImage {
    @Field({ nullable: true })
    id: number;

    @Field({ nullable: true })
    imageTypeId: number;

    @Field({ nullable: true })
    objectId: number;

    @Field({ nullable: true })
    statusId: number;

    @Field({ nullable: true })
    sizeInBytes: number;

    @Field({ nullable: true })
    width: number;

    @Field({ nullable: true })
    height: number;

    @Field({ nullable: true })
    activeStatus: number;

    @Field({ nullable: true })
    active: boolean;

    @Field({ nullable: true })
    title: string;

    @Field({ nullable: true })
    altText: string;
}

@ObjectType()
class Builder {
    @Field({ nullable: true })
    id: number;

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    displayName: string;

    @Field({ nullable: true })
    url: string;

    @Field({ nullable: true })
    isBuilderListed: boolean;

    @Field({ nullable: true })
    averageDelay: number;
}

@ObjectType()
class Suburb {
    @Field({ nullable: true })
    id: number;

    @Field({ nullable: true })
    cityId: number;

    @Field({ nullable: true })
    label: string;

    @Field({ nullable: true })
    status: string;

    @Field({ nullable: true })
    city: City;

    @Field({ nullable: true })
    priority: number;

    @Field({ nullable: true })
    overviewUrl: string;

    @Field({ nullable: true })
    isDescriptionVerified: boolean;
}

@ObjectType()
class Locality {
    @Field({ nullable: true })
    localityId: number;

    @Field({ nullable: true })
    authorized: boolean;

    @Field({ nullable: true })
    cityId: number;

    @Field({ nullable: true })
    label: string;

    @Field({ nullable: true })
    localityServing: boolean;

    @Field({ nullable: true })
    url: string;

    @Field({ nullable: true })
    status: string;

    @Field({ nullable: true })
    priority: number;

    @Field({ nullable: true })
    overviewUrl: string;

    @Field({ nullable: true })
    relevanceScore: number;

    @Field({ nullable: true })
    projectMaxLivabilityScore: number;

    @Field({ nullable: true })
    projectMinLivabilityScore: number;

    @Field({ nullable: true })
    isDescriptionVerified: boolean;

    @Field({ nullable: true })
    localityHeroshotImageUrl: string;

    @Field({ nullable: true })
    minAffordablePrice: number;

    @Field({ nullable: true })
    maxAffordablePrice: number;

    @Field({ nullable: true })
    minLuxuryPrice: number;

    @Field({ nullable: true })
    maxBudgetPrice: number;

    @Field({ nullable: true })
    constructionStatusId: number;

    @Field({ nullable: true })
    suburb: Suburb;

    @Field({ nullable: true })
    suburbId: number;
}

@ObjectType()
export class Properties {
    @Field({ nullable: true })
    propertyId: number;

    @Field({ nullable: true })
    projectId: number;

    @Field({ nullable: true })
    bedrooms: number;

    @Field({ nullable: true })
    bathrooms: number;

    @Field({ nullable: true })
    unitType: string;

    @Field({ nullable: true })
    unitName: string;

    @Field({ nullable: true })
    priceCurrency: string;

    @Field({ nullable: true })
    size: number;

    @Field({ nullable: true })
    measure: string;

    @Field({ nullable: true })
    URL: string;

    @Field({ nullable: true })
    isPropertySoldOut: boolean;

    @Field({ nullable: true })
    carpetArea: number;
}

@ObjectType()
export class Project {
    @Field({ nullable: true })
    isHotProject: boolean;

    @Field({ nullable: true })
    isOldAgeCompatible: boolean;

    @Field({ nullable: true })
    isProjectServing: boolean;

    @Field({ nullable: true })
    projectFocus: boolean;

    @Field({ nullable: true })
    reraIdExpired: boolean;

    @Field({ nullable: true })
    projectUnderInvestigation: boolean;

    @Field({ nullable: true })
    hideBuilderName: boolean;

    @Field({ nullable: true })
    reraRegistrationNumber: string;

    @Field({ nullable: true })
    isFeaturedOnHomePage: boolean;

    @Field({ nullable: true })
    isFeaturedOnCityPage: boolean;

    @Field({ nullable: true })
    isFeaturedOnLocalityPage: boolean;

    @Field({ nullable: true })
    projectMainImageId: number;

    @Field({ nullable: true })
    isFeaturedOnMakaanIq: boolean;

    @Field({ nullable: true })
    isFeatured: boolean;

    @Field({ nullable: true })
    isProjectFeaturedBuy: boolean;

    @Field({ nullable: true })
    isProjectFeaturedRent: boolean;

    @Field({ nullable: true })
    builderPackageMagicNumber: number;

    @Field({ nullable: true })
    authorized: boolean;

    @Field({ nullable: true })
    localityId: number;

    @Field({ nullable: true })
    shouldDisplayPrice: boolean;

    @Field({ nullable: true })
    locality: Locality;

    @Field({ nullable: true })
    builderId: number;

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    projectTypeId: number;

    @Field({ nullable: true })
    launchDate: number;

    @Field({ nullable: true })
    address: string;

    @Field({ nullable: true })
    computedPriority: number;

    @Field({ nullable: true })
    assignedPriority: number;

    @Field({ nullable: true })
    assignedLocalityPriority: number;

    @Field({ nullable: true })
    assignedSuburbPriority: number;

    @Field({ nullable: true })
    possessionDate: number;

    @Field({ nullable: true })
    firstPhaseCompletionDate: number;

    @Field({ nullable: true })
    currentPhaseCompletionDate: number;

    @Field({ nullable: true })
    createdDate: number;

    @Field({ nullable: true })
    imageURL: string;

    @Field({ nullable: true })
    URL: string;

    @Field({ nullable: true })
    latitude: number;

    @Field({ nullable: true })
    longitude: number;

    @Field({ nullable: true })
    forceResale: number;

    @Field({ nullable: true })
    minBedrooms: number;

    @Field({ nullable: true })
    maxBedrooms: number;

    @Field({ nullable: true })
    projectStatus: string;

    @Field({ nullable: true })
    isResale: boolean;

    @Field({ nullable: true })
    isPrimary: boolean;

    @Field({ nullable: true })
    isSoldOut: boolean;

    @Field({ nullable: true })
    totalUnits: number;

    @Field({ nullable: true })
    sizeInAcres: number;

    @Field({ nullable: true })
    propertySizeMeasure: string;

    @Field({ nullable: true })
    dominantUnitType: string;

    // TBD
    @Field(() => [String], { nullable: true })
    propertyUnitTypesCommerical: [string];

    @Field({ nullable: true })
    localityLabelPriority: string;

    @Field({ nullable: true })
    suburbLabelPriority: string;

    @Field({ nullable: true })
    builderLabelPriority: string;

    @Field({ nullable: true })
    unitTypeString: string;

    @Field(() => [String], { nullable: true })
    distinctBedrooms: string[];

    @Field(() => [String], { nullable: true })
    distinctBedroomsFloat: string[];

    @Field({ nullable: true })
    imagesCount: number;

    @Field({ nullable: true })
    hasProjectOffer: boolean;

    @Field({ nullable: true })
    livabilityScore: number;

    @Field({ nullable: true })
    primaryScore: number;

    @Field({ nullable: true })
    projectLivabilityRank: number;

    @Field({ nullable: true })
    activeStatus: string;

    @Field({ nullable: true })
    has3DImages: boolean;

    @Field({ nullable: true })
    resaleEnquiry: boolean;

    @Field({ nullable: true })
    hasProjectInsightReport: boolean;

    @Field({ nullable: true })
    projectId: number;

    // TBD
    @Field(() => [Properties], { nullable: true })
    properties: [Properties];

    @Field(() => [String], { nullable: true })
    propertyUnitTypes: [string];

    @Field({ nullable: true })
    mainImage: MainImage;

    @Field({ nullable: true })
    builder: Builder;
}
