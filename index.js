import express from "express";
import { MongoClient } from 'mongodb';
import 'dotenv/config'

const app = express();
const PORT = 8000;


const client = new MongoClient(process.env.MONGODB_URI);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

connectToMongoDB()


//get the http req: http://localhost:8000/
app.get("/", (req, res) => {
  res.send({ message: "Server is running fine!" });
});

//server on:
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
