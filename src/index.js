import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: __dirname + "/graphql/schema.graphql",
  resolvers,
});

export function movie() {
  server.start(() => console.log("Graphql Server Running"));
}
