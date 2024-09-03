// my-blog-backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

app.get('/', (req, res) => {
  res.send('Welcome to My Blog API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const postRoutes = require('./routes/posts');
app.use('/api/posts', postRoutes);

