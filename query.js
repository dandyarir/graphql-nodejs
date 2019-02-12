const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql')
const _ = require('lodash')

const { movieType } = require('./types.js')
let { movies,directors } = require('./data.js')

//define query
const queryType = new
GraphQLObjectType({
    name: 'Query',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => "hello world"
        },
        movie: {
            type: movieType,
            args: {
                id: { type: GraphQLInt}
            },
            resolve: function (source,args) {
                return _.find(movies, {id: args.id});
            }
        },
        director: {
            type: directorType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: function (source, args) {
                return _.find(directors, { id: args.id});
            }
        }
    }
});

exports.queryType = queryType