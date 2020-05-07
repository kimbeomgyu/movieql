"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movie = movie;

var _graphqlYoga = require("graphql-yoga");

var _resolvers = require("./graphql/resolvers");

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _graphqlYoga.GraphQLServer({
  typeDefs: __dirname + "/graphql/schema.graphql",
  resolvers: _resolvers2.default
});

function movie() {
  server.start(function () {
    return console.log("Graphql Server Running");
  });
}