const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const helmet = require('helmet');
const cors = require('cors');
const requestIp = require("request-ip");

const useragent = require('express-useragent');
const compression = require('compression');


dotenv.config()

// const port = 7122
const port = 7140
const apiv1 = require('./modules/apiv1')
const app = express()
app.use(requestIp.mw());

 
app.use(cors()); 
app.use(
  express.urlencoded({
    limit: '50mb', 
    extended: true,
  })
)

app.use(express.json({limit: '50mb'}));
app.use(express.static('public'));
app.use(useragent.express())
app.use(morgan('tiny'));
app.use(compression())
app.use(helmet());

app.use('/api/v1', apiv1);

app.listen(port, () => console.log(`Hello,  Service ready on port ${port}`))
 