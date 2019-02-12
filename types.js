const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} = require('graphql')
const _ = require('lodash')

let {movies} = require('./data.js')

//Define movie type
movieType = new GraphQLObjectType({
    name: 'Movie',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        year: { type: GraphQLInt },
        directorId: { type: GraphQLID }
    }
});

//Define directors type
directorType = new GraphQLObjectType({
    name: 'Director',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        movies: {
            type: new GraphQLList(movieType),
            resolve: function (source, args) {
                return _.filter(movies, { directorId: source.id })
            }
        }
    }
});

exports.movieType = movieType;
exports.directorType = directorType;