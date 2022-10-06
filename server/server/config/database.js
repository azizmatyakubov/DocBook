import mongoose from 'mongoose'


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            })
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error)
    }
};

export default connect;