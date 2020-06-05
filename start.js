const app = require('./server/index');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server start on port ${port}`);
});
