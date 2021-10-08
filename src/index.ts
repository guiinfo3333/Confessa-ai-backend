import "reflect-metadata"
import express from 'express'
import cors from 'cors'
import routes from './routes'
import { Cidade } from "./entity/cidade";

const cidade = new Cidade();

async function topdms() {
    console.log(await cidade.retornaCidades())
}

topdms()

const app = express()
app.set('view engine', 'ejs');
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async function (req, res) {
    res.json({ "oi": "oi" })
});

app.use(routes)

app.listen(process.env.PORT || 5000, () => { console.log('Server is running') })












