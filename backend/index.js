import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
import cors from 'cors';
import bookRoute from "./route/useRoute.js"
import workRoute from "./route/workRoute.js";

app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to mongodb
//
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

} catch (error) {

}
app.use("/book", bookRoute)
app.use("/users", workRoute)




app.listen(PORT, () => {
    console.log('working ${PORT}');
})