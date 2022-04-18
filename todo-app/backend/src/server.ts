
import express, { Express } from 'express'
import bodyParser from 'body-parser'
import routes from './routes';
import cors from 'cors';

const server: Express = express()
const port = process.env.PORT || 3003;

// Enabling CORS for some specific origins only.
let corsOptions = {
    origin : ['http://localhost:8080', 'http://localhost:8081'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
    optionsSuccessStatus: 200
}

server.use(bodyParser.urlencoded({ extended: true }))
server.use(cors(corsOptions))
server.use(express.json())
server.use(routes)

server.listen(port, () => console.log(`🚀 Server ready at: http://localhost:${port}!`))


