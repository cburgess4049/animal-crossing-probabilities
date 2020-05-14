const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type Probability {
        name: String!
        percentage: Float!
    }
    type Fish {
        _id: ID
        name: String
        available: [String!]!
        sellingPrice: Int!
        imageUrl: String
    }    

    type FishCaught {
        _id: ID
        name: String!
        month: String!
        amountCaught: Int!
    }
    
    type RootQuery {
        fish: [Fish!]!
        allFishCaught: [FishCaught!]!
        calculateProbabilityGivenMonth(month: String!): [Probability]
    }

    type RootMutation {
        createFish(name: String, available: [String!], sellingPrice: Int! ): Fish
        createFishCaught(name: String!, month: String!,  amountCaught: Int!): FishCaught
        updateFish(name: String): Fish
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
    `)