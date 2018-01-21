const graphql = require('graphql')
const fetch = require('node-fetch')



const PlayerType = new graphql.GraphQLObjectType({
    name: 'Player',
    fields: () => ({
        lastYear: {
            type: graphql.GraphQLInt,
            resolve: (root, args) => root.lastYear,
        },
        rookieYear: {
            type: graphql.GraphQLInt,
            resolve: (root, args) => root.rookieYear,
        },
        fullName: {
            type: graphql.GraphQLString,
            resolve: (root, args) => root.fullName,
        },
        lastName: {
            type: graphql.GraphQLString,
            resolve: (root, args) => root.lastName,
        },
        firstName: {
            type: graphql.GraphQLString,
            resolve: (root, args) => root.firstName,
        },
        birthDate: {
            type: graphql.GraphQLInt,
            resolve: (root, args) => root.birthDate,
        },
        profileUrl: {
            type: graphql.GraphQLString,
            resolve: (root, args) => root.profileUrl,
        },
        status: {
            type: graphql.GraphQLString,
            resolve: (root, args) => root.status,
        },
        team: {
            type: graphql.GraphQLString,
            resolve: (root, args) => root.team,
        },
        playerId: {
            type: graphql.GraphQLInt,
            resolve: (root, args) => root.playerId,
        },
    })
})


module.exports = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Query',

        fields: () => ({
            players: {
                type: graphql.GraphQLList(PlayerType),
                resolve: async () => {
                    const resp = await fetch('http://api.suredbits.com/nba/v0/players/chi');
                    const data = await resp.json();
                    return data;
                }

            },
        }),
    }),
})  