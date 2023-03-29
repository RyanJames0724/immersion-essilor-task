import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
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

export const placementOneType = new GraphQLObjectType({
    name: 'PlacementOneData',
    description: 'This is the data for placement one',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        bannerBackground: { type: GraphQLString },
        bannerLogo: { type: GraphQLString },
        firstText: { type: GraphQLString },
        placementButtons: { type: new GraphQLList(getbuttonData) },
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