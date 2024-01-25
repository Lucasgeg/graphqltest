const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

mongoose.connect(
  "mongodb+srv://sulac:HMzKD1zHnFNd6VEJ@cluster0.syviojo.mongodb.net/GraphQL"
);

mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () =>
  console.log("Server running on port 4000, look at http://localhost:4000")
);
