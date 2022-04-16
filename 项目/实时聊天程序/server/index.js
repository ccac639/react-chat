const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const ip = require('./utils')
const {getIPAddress} = require("./utils/getIp");
const userRoutes=require('./routes/userRoutes')
dotenv.config()
app.use(cors());
app.use(express.json());
app.use('/api/auth',userRoutes);
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('连接成功')
    })
    .catch((err) => {
        console.log('err', err.message)
    })

const server = app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`http://${ip.getIPAddress()}:${process.env.PORT}`);
});


