const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const path = require("path")

const IndexRoute = require("./Routers/index")
const connectDatabase = require("./Helpers/database/connectDatabase")
const customErrorHandler = require("./Middlewares/Errors/customErrorHandler")

dotenv.config({
    // path:  './Config/config.env'
    path:  '.env'
})

connectDatabase()

const app = express();

app.use(express.json())
app.use(cors())

// Add a middleware to prepend '/api' to all routes
app.use('/api', (req, res, next) => {
    req.url = `/api${req.url}`;
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