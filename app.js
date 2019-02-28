import express from 'express';
import bodyParser from 'body-parser';

// Set express app
const app = express();

// Parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// hello dude
app.get('/api/v1/hello', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'The hello is here dude',
    hello: { msg: 'Hey Alan! You are welcome!' }
  })
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
