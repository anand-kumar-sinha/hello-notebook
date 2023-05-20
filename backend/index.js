const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors')

const connectToMongo = mongoose.connect('mongodb+srv://admin:anandadmin@cluster0.deq2bbq.mongodb.net')
.then(function(db){
    console.log('Database connected');
})

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));
app.use('/',require('./routes/home'));

app.listen(port, () => {
  console.log(`hello-notebook backend listening on port ${port}`)
})

