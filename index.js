import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'

mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log('Connected to MongoDB')
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error)
})
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!!`)
})