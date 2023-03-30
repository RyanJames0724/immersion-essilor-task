import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors'
import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
} from 'graphql';

import {
    placementOneData as mockPlacementOneData,
    placementTwoData as mockPlacementTwoData,
    placementThreeData as mockPlacementThreeData,
    placementFourData as mockPlacementFourData,
    placementFiveData as mockPlacementFiveData,
    placementSixData as mockPlacementSixData,
    placementSevenData as mockPlacementSevenData,
    placementEightData as mockPlacementEightData,
    placementNineData as mockPlacementNineData,
    placementTenData as mockPlacementTenData
} from './mock-data.js';

import {
    placementOneType,
    placementTwoType,
    placementThreeType,
    placementFourType,
    placementFiveType,
    placementSixType,
    placementSevenType,
    placementEightType,
    placementNineType,
    placementTenType
} from './placements-type.js'

const app = express();

app.use(cors())

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: {
        placementOneDataQuery: {
            type: new GraphQLList(placementOneType),
            description: 'List of placement one data',
            resolve: () => mockPlacementOneData
        },
        placementTwoDataQuery: {
            type: new GraphQLList(placementTwoType),
            description: 'List of placement two data',
            resolve: () => mockPlacementTwoData
        },
        placementThreeDataQuery: {
            type: new GraphQLList(placementThreeType),
            description: 'List of placement three data',
            resolve: () => mockPlacementThreeData
        },
        placementFourDataQuery: {
            type: new GraphQLList(placementFourType),
            description: 'List of placement four data',
            resolve: () => mockPlacementFourData
        },
        placementFiveDataQuery: {
            type: new GraphQLList(placementFiveType),
            description: 'List of placement five data',
            resolve: () => mockPlacementFiveData
        },
        placementSixDataQuery: {
            type: new GraphQLList(placementSixType),
            description: 'List of placement six data',
            resolve: () => mockPlacementSixData
        },
        placementSevenDataQuery: {
            type: new GraphQLList(placementSevenType),
            description: 'List of placement seven data',
            resolve: () => mockPlacementSevenData
        },
        placementEightDataQuery: {
            type: new GraphQLList(placementEightType),
            description: 'List of placement eight data',
            resolve: () => mockPlacementEightData
        },
        placementNineDataQuery: {
            type: new GraphQLList(placementNineType),
            description: 'List of placement nine data',
            resolve: () => mockPlacementNineData
        },
        placementTenDataQuery: {
            type: new GraphQLList(placementTenType),
            description: 'List of placement ten data',
            resolve: () => mockPlacementTenData
        }
    }
});


const schema = new GraphQLSchema({
    query: RootQueryType
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));
app.listen(5000, () => console.log('Server is running on port 5000'));
