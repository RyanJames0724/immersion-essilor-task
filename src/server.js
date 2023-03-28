import express from 'express'
import { buildSchema } from 'graphql'
import { graphqlHTTP } from 'express-graphql'
import mockData from './mock-data.js'
import cors from 'cors'

const app = express()

app.use(cors())

const schema = buildSchema(`
    type buttonData {
        id: Int
        buttonText: String
        textAfterSup: String
    }

    type imageData {
        id: Int
        imageContent: String
    }

    type Data {
        id: Int
        placementBackgroundImage: String
        placementTitle: String
        textAfterBreak: String
        placementButtons: [buttonData]
        placementParagraph: String
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
