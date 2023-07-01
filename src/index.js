import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import indexRoutes from "./routes/index.js"

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))//obtiene la ruta absoluta de mi archivo **RECORDAR**
//console.log(__dirname, '/views')  imprime mi ruta

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(indexRoutes)

app.use(express.static(join(__dirname, 'public')))

/* app.get('/',(req, res) => res.render('index'))

app.get('/about',(req, res) => res.render('about'))

app.get('/contact',(req, res) => res.render('contact')) */


app.listen(3000)
console.log('Server is listen on port', 3000)
