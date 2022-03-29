
import express from 'express'
import bodyParser from 'body-parser'
import { cors } from './config/cors'
import routes from './routes';

const server = express()
const port = 3003;

server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.json())
server.use(cors)
server.use(routes)

server.listen(port, () =>
    console.log(`
🚀 Server ready at: http://localhost:${port}`)
)

    
