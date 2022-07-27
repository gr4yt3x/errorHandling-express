
//retira os erros da tela e mostra no console.
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something Wrong!');
  });
  