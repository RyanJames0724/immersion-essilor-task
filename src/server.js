import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors'
import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
} from 'graphql';

import { getAllData } from './mock-data.js';

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
    placementTenType,
    accordionType
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
            resolve: () => getAllData.filter(data => data.id === 1)
        },
        placementTwoDataQuery: {
            type: new GraphQLList(placementTwoType),
            description: 'List of placement two data',
            resolve: () => getAllData.filter(data => data.id === 2)
        },
        placementThreeDataQuery: {
            type: new GraphQLList(placementThreeType),
            description: 'List of placement three data',
            resolve: () => getAllData.filter(data => data.id === 3)
        },
        placementFourDataQuery: {
            type: new GraphQLList(placementFourType),
            description: 'List of placement four data',
            resolve: () => getAllData.filter(data => data.id === 4)
        },
        placementFiveDataQuery: {
            type: new GraphQLList(placementFiveType),
            description: 'List of placement five data',
            resolve: () => getAllData.filter(data => data.id === 5)
        },
        placementSixDataQuery: {
            type: new GraphQLList(placementSixType),
            description: 'List of placement six data',
            resolve: () => getAllData.filter(data => data.id === 6)
        },
        placementSevenDataQuery: {
            type: new GraphQLList(placementSevenType),
            description: 'List of placement seven data',
            resolve: () => getAllData.filter(data => data.id === 7)
        },
        placementEightDataQuery: {
            type: new GraphQLList(placementEightType),
            description: 'List of placement eight data',
            resolve: () => getAllData.filter(data => data.id === 8)
        },
        placementNineDataQuery: {
            type: new GraphQLList(placementNineType),
            description: 'List of placement nine data',
            resolve: () => getAllData.filter(data => data.id === 9)
        },
        placementTenDataQuery: {
            type: new GraphQLList(placementTenType),
            description: 'List of placement ten data',
            resolve: () => getAllData.filter(data => data.id === 10)
        },
        accordionQuery: {
            type: new GraphQLList(accordionType),
            description: 'List of accordion data',
            resolve: () => getAllData.filter(data => data.id === 11)
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
