const  express = require('express');
// create home route
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('app now listening for requests on port 3000');
});
