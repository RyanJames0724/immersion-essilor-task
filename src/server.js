import express from 'express'
import { buildSchema } from 'graphql'
import { graphqlHTTP } from 'express-graphql'
import mockData from './mock-data.js'
import cors from 'cors'

const app = express()

app.use(cors())

const schema = buildSchema(`
    type button {
        id: Int
        firstbuttonText: String
        secondbuttonText: String
    }

    type image {
        id: Int
        imageSrc: String
        imageBackgroundSrc:String
        textDefaultShow: String
        textHoverShow: String
        supContent: String
    }

    type card {
        id: Int
        cardHeader: String
        cardContent: String
        cardContentEm: String
    }

    type Data {
        id: Int
        images: [image]
        firstText: String
        secondText: String
        placementButtons: [button]
        sideText: String
        card: [card]
    }

    type Query {
        placementData: [Data]
    }
`)

const root = {
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
