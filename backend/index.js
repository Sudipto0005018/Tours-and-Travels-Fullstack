const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

require('./dbConnect'); 

const cors = require('cors');
app.use(cors());

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 7000;

const userouter = require('./routers/userRouter');
app.use('/user', userouter);

const adminrouter = require('./routers/adminRouter');
app.use('/admin', adminrouter);

app.use('/', (req, res) => {
    res.send('<h1>Hello, this is the backend</h1>');
});

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})






// const express = require('express');
// const dotenv = require('dotenv');
// dotenv.config();

// const app = express();
// require('./dbConnect'); 

// const cors = require('cors');
// app.use(cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// const userouter = require('./routers/userRouter');
// app.use('/user', userouter);

// const adminrouter = require('./routers/adminRouter');
// app.use('/admin', adminrouter);


// app.get('/', (req, res) => {
//     res.send('<h1>Hello, this is the backend</h1>');
// });

// const PORT = process.env.PORT || 7000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
