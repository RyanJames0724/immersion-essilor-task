import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull,
} from 'graphql';

const getbuttonData = new GraphQLObjectType({
    name: 'Button',
    description: 'This the data for buttons',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        buttonText: { type: GraphQLString }
    })
});

const getPlacementTwoimageData = new GraphQLObjectType({
    name: 'PlacementTwoImages',
    description: 'This the data for images in placement three',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        imageSrc: { type: GraphQLString },
    })
});

const getPlacementThreeimageData = new GraphQLObjectType({
    name: 'PlacementThreeImages',
    description: 'This the data for images in placement three',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        imageSrc: { type: GraphQLString },
        imageBackgroundSrc: { type: GraphQLString },
        textDefaultShow: { type: GraphQLString },
        textHoverShow: { type: GraphQLString },
    })
});

const getCardData = new GraphQLObjectType({
    name: 'PlacementFourCards',
    description: 'This the data for cards in placement four',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        cardHeader: { type: GraphQLString },
        cardContent: { type: GraphQLString },
    })
})

const getPlacementFiveimageData = new GraphQLObjectType({
    name: 'PlacementFiveImages',
    description: 'This the data for images in placement five',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        imageSrc: { type: GraphQLString },
        imageTitle: { type: GraphQLString },
        imageDescTitle: { type: GraphQLString },
        imageDesc: { type: GraphQLString },
    })
});

const getPlacementSixAndSevenimageData = new GraphQLObjectType({
    name: 'PlacementSixImages',
    description: 'This the data for images in placement six',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        imageSrc: { type: GraphQLString },
        imageTitle: { type: GraphQLString },
        imageDesc: { type: GraphQLString },
    })
});

const placementNineData = new GraphQLObjectType({
    name: 'PlacementNineDataText',
    description: 'This data is for placement nine',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        firstText: { type: GraphQLString },
    })
})

const accordionListData = new GraphQLObjectType({
    name: 'AccordionData',
    description: 'This data is for accordion',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        accordionHeader: { type: GraphQLString },
        accordionBody: { type: GraphQLString },
    })
})

export const placementOneType = new GraphQLObjectType({
    name: 'PlacementOneData',
    description: 'This is the data for placement one',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        bannerBackground: { type: GraphQLString },
        bannerLogo: { type: GraphQLString },
        firstText: { type: GraphQLString },
        placementButtons: { type: getbuttonData },
        sideText: { type: GraphQLString },
    })
});

export const placementTwoType = new GraphQLObjectType({
    name: 'PlacementTwoData',
    description: 'This is the data for placement two',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        images: { type: new GraphQLList(getPlacementTwoimageData) },
        firstText: { type: GraphQLString },
        secondText: { type: GraphQLString }
    })
});

export const placementThreeType = new GraphQLObjectType({
    name: 'PlacementThreeData',
    description: 'This is the data for placement three',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        images: { type: new GraphQLList(getPlacementThreeimageData) },
    })
});

export const placementFourType = new GraphQLObjectType({
    name: 'PlacementFourData',
    description: 'This is the data for placement four',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        firstText: { type: GraphQLString },
        card: { type: new GraphQLList(getCardData) },
    })
});

export const placementFiveType = new GraphQLObjectType({
    name: 'PlacementFiveData',
    description: 'This is the data for placement five',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        firstText: { type: GraphQLString },
        images: { type: new GraphQLList(getPlacementFiveimageData) },
    })
});

export const placementSixType = new GraphQLObjectType({
    name: 'PlacementSixData',
    description: 'This is the data for placement six',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        images: { type: new GraphQLList(getPlacementSixAndSevenimageData) },
    })
});

export const placementSevenType = new GraphQLObjectType({
    name: 'PlacementSevenData',
    description: 'This is the data for placement seven',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        images: { type: new GraphQLList(getPlacementSixAndSevenimageData) },
        firstText: { type: GraphQLString },
    })
});

export const placementEightType = new GraphQLObjectType({
    name: 'PlacementEightData',
    description: 'This is the data for placement eight',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        firstText: { type: GraphQLString },
    })
});

export const placementNineType = new GraphQLObjectType({
    name: 'PlacementNineData',
    description: 'This is the data for placement nine',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        placementText: { type: new GraphQLList(placementNineData) },
    })
});

export const placementTenType = new GraphQLObjectType({
    name: 'PlacementTenData',
    description: 'This is the data for placement ten',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        firstText: { type: GraphQLString },
    })
});

export const accordionType = new GraphQLObjectType({
    name: 'accordionData',
    description: 'This is the data for accordion',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        accordionData: { type: new GraphQLList(accordionListData) },

    })
});