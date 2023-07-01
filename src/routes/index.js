import { Router } from "express"
const router = Router()

router.get('/',(req, res) => res.render('index', {title: 'Proyecto Node'}))

router.get('/about',(req, res) => res.render('about', {title: 'Sobre me'}))

router.get('/contact',(req, res) => res.render('contact', {titulo: 'Contactame'}))

export default router