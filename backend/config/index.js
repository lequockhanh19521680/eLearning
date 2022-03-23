/*const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://khanh:khanh@cluster0.gsmj5.mongodb.net/BACKEND?retryWrites=true&w=majority"

const connect = async () => {
    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

        await client.connect(err => {
        console.log(err)
        });
        console.log("Connect db successfully")

    } catch (error) {
        console.log("connect db failed: ", error.message)
    }
}

module.exports = {connect}*/

const mongoose = require('mongoose')

const connectString = "mongodb+srv://khanh:khanh@cluster0.gsmj5.mongodb.net/db?retryWrites=true&w=majority"
const connect = async () =>{
    mongoose.connect(connectString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('connect to db'))
    .catch((err) => console.log(err))
}

module.exports = {connect}