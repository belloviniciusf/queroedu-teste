const app = require('./index');

const port = process.env.SERVER_PORT || 3333;

app.listen(port, () => {
  console.log(`Server Rodando na porta ${port}`);
});
