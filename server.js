//getting all libraries
const express = require('express')
const graphqlHTTP = require('express-graphql')
const { GraphQLSchema } = require('graphql')

const {queryType} = require('./query.js')

//setting up the port number and expressjs app
const port = 5000
const app = express()

//define Schema
const schema = new GraphQLSchema({ query: queryType })

//setting up nodejs GraphQL server
app.use('/graphql', graphqlHTTP({ 
    schema: schema,
    graphiql: true,
 }))
// app.get('/hello', (req,res) => {
//     res.send("Hello Dendi")
// });

app.listen(port)
console.log(`Server running at http:://localhost:${port}`)