const express = require('express')
const app = express();
require("dotenv").config();
const connectDb = require("./Config/database");
const userRoutes = require('./Routes/userRoute');
const postRoutes = require('./Routes/postRoute');


const PORT = process.env.PORT || 5000
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);


app.get("/", (req, res) => {
    res.json(
        "Hi there from Sachin,  This is a BACKEND SERVER OF SocialMedia APP "
    );
});


app.listen(PORT, () => {
    console.log(`backend is runnig on PORT ${PORT}`);
})