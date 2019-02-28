import express from 'express';

// Set express app
const app = express();

// hello dude
app.get('/api/v1/hello', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'The hello is here dude',
    // hello: { msg: 'Hey Alan!' }
  })
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
