const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const path = require("path")
const promClient = require('prom-client');

const IndexRoute = require("./Routers/index")

const connectDatabase = require("./Helpers/database/connectDatabase")
const customErrorHandler = require("./Middlewares/Errors/customErrorHandler")

dotenv.config({
    // path:  './Config/config.env'
    path:  '.env'
})





const app = express();

// Create a metric to track HTTP requests
// const httpRequestDurationMicroseconds = new promClient.Histogram({
//   name: 'http_request_duration_seconds',
//   help: 'Duration of HTTP requests in seconds',
//   labelNames: ['method', 'route', 'status_code'],
//   buckets: [0.1, 0.5, 1, 1.5, 2, 3, 5, 10],
// });

// // Middleware to measure HTTP request duration
// app.use((req, res, next) => {
//   const end = httpRequestDurationMicroseconds.startTimer();
//   res.on('finish', () => {
//     end({
//       method: req.method,
//       route: req.route.path,
//       status_code: res.statusCode,
//     });
//   });
//   next();
// });

// // Endpoint to expose Prometheus metrics
// app.get('/metrics', (req, res) => {
//   res.set('Content-Type', promClient.register.contentType);
//   res.end(promClient.register.metrics());
// });



connectDatabase()

// const app = express();

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


  
app.use("/",IndexRoute)

app.use(customErrorHandler)

const PORT = process.env.PORT || 8085;


app.use(express.static(path.join(__dirname , "public") ))

const server = app.listen(PORT,()=>{
//console.log(process.env.PORT)
    console.log(`Server running on port  ${PORT} : ${process.env.NODE_ENV}`)

})

process.on("unhandledRejection",(err , promise) =>{
    console.log(`Logged Error : ${err}`)

    server.close(()=>process.exit(1))
})