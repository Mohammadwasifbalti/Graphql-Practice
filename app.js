const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const schema = require("./schema/schema");
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://wasif:abcdef123456@cluster0.nhj1h.mongodb.net/graphql?retryWrites=true&w=majority", { useNewUrlParser: true })
mongoose.connection.once("open", () => {
  console.log("connected to database")
})

app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("app is running");
});
