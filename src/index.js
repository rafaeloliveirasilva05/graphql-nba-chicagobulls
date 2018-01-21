const graphql = require('graphql')
const graphqlHTTP = require('express-graphql')
const express = require('express')
const schema = require('./schema')
const app = express()

app.use('/', graphqlHTTP({
    schema: schema,
    graphiql: true,
}))

app.listen(3000, function () {
    console.log('Server on.')
})