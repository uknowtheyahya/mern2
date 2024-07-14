const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;


// middlewear 
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Server!')
})
//  mongodb
 
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mern-book-store:V60qs38Bmjj5YIdh@cluster1.xechjwc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // cretate collection
    const bookCollections = client.db("BookInventory").collection("books");

    app.post("/upload-book", async (req, res) => {
        try {
            const data = req.body;
            const result = await bookCollections.insertOne(data);
            res.send(result);
            // if (result.insertedCount === 1) {
            //     res.status(200).json({ message: "Book uploaded successfully", insertedId: result.insertedId });
            // } else {
            //     throw new Error("Failed to insert book");
            // }
        } catch (error) {
            console.error("Error uploading book:", error);
            res.status(500).json({ error: "Failed to upload book" });
        }
    });
// get all books from the dtabase
// app.get("/all-books",async(req,res)=>{
//     const books =  bookCollections.find();
//     const result = await books.toArray();
//     res.send(result);
// })
// update book database path or udate methods
app.patch("/book/:id",async(req,res)=>{
    const id = req.params.id;
    // console.log(id);
    const updateBookData=req.body;
    const filter = {_id: new ObjectId(id)};
    const options = { upsert: true };
    const updatedDoc = {
        $set: {
            ...updateBookData
        }
    }
    // update
    const result = await bookCollections.updateOne(filter,updatedDoc, options);
    res.send(result);

})
// delete
app.delete("/book/:id",async(req,res)=>{
    const id= req.params.id;
    const filter = {_id: new ObjectId(id)};
    const result =await bookCollections.deleteOne(filter);
    res.send(result);
})
// find by category
app.get("/all-books", async(req,res) =>{
    let query = {};
            if (req.query?.category) {
                query = { category: req.query.category }
            }
            const result = await bookCollections.find(query).toArray();
            res.send(result)
})
// to get single book
app.get("/book/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const result = await bookCollections.findOne(filter);
  res.send(result)
})
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})