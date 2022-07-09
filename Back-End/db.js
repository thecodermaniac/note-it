const mongoose= require('mongoose')
const mongoURI='mongodb://localhost:27017/'

const connectToMongoose=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('connected to mongodb')
    })
}

module.exports=connectToMongoose