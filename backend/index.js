const express = require('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const { nanoid } = require ('nanoid');
require ('dotenv'). config();

const app = express();
app.use (cors());
app.use (express.json());

mongoose.connect(process.env.DATABASE_URL)
.then(() => console.log('DB Connected'))
.catch((err) => console.log('DB Connection Error: ', err));

app.listen(5000, () => console.log('Server running on port 5000'));


