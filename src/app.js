const express = require(`express`);
const app = express();
require(`./db/connections`);
const customerRouter = require('./routes/customer');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/', customerRouter);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
