const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:WOiZ5xKI5hInoQPt@cluster0.zklqg.mongodb.net/locapic'

mongoose.connect(connectionString, {connectTimeoutMS: 2000})
.then(() => console.log('Database Connected'))
.catch(error => console.error(error))