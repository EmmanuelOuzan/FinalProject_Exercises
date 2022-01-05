require('dotenv').config({ path: '/.env' })
// const mongoose = require('mongoose')

// const
//     userName = 'Admin',
//     password = 'Admin',
//     connectionString = `mongodb+srv://${userName}:${password}@emmanuelmongocluster.a8zm2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

// console.log('connecting ..')
// mongoose.connect(connectionString)
//     .then(() => {
//         console.log('Mongo connected!')
//     })


    const mongoose = require('mongoose');
    mongoose.connect(process.env.CONNECTION_STRING)
        .then(() => console.log('Mongo Connected'))
    