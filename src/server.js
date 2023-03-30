import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors'
import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} from 'graphql';

import {
    placementOneData as mockPlacementOneData,
    placementTwoData as mockPlacementTwoData,
    placementThreeData as mockPlacementThreeData,
    placementFourData as mockPlacementFourData,
    placementFiveData as mockPlacementFiveData,
    placementSixData as mockPlacementSixData
} from './mock-data.js';

import {
    placementOneType,
    placementTwoType,
    placementThreeType,
    placementFourType,
    placementFiveType,
    placementSixType
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
