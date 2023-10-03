import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'

dotenv.config()

import { router as MoviesRouter } from '../src/router/movies.router'

const PORT = process.env.PORT || 8080

const app = express()

const corsOptions = {
    origin: "http://localhost:3000"
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', MoviesRouter)



app.listen(PORT, () => console.log(`Started on port ${PORT}`))