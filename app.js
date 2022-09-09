const express = require('express')
const connectDb = require('./db/connectdb')
const app = express();
const path=require('path')
const port = process.env.PORT || '42000';

const web=require('./routes/web')

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/school";

connectDb(DATABASE_URL);

app.set('view engine','ejs')

app.use(express.static(path.join(process.cwd(),'public')))

app.listen(port, () => {
    console.log(`server listening at http://loca;host:${port}`)
})

app.use('/student',web)