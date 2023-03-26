import express from 'express'
// import axios from 'axios'
import { buildSchema } from 'graphql'
import { graphqlHTTP } from 'express-graphql'
import  mockData  from './mock-data.js'

const app = express()


const schema = buildSchema(`
    type Data {
        id: Int,
        bannerTitle: String,
        bannerParagraph: String,
        detailsTitle: String,
        detailsParagraph: String
    }

    type Query {
        hello: String
        placementData: [Data]
    }
`)

const root = {
    hello: () => {
        return "Hello World"
    },

    placementData: () => {
        return mockData
    }
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: root
}))

app.listen(5000, () => console.log('Server on Port 5000'))
