import { requireAuth } from '../middlewares/requireAuth'
import { Router } from 'express'
import { allowCredentials } from '../middlewares/allowCredentials'

//Require controllers
import { Auth } from '../controllers/auth'
//Initilaziation
const router = Router()

//Routes
router.get('/check', allowCredentials, Auth.check)
router.post('/login', allowCredentials, Auth.login)
router.options('/login', allowCredentials, (req: any, res: any) => {
    res.end()
})
router.get('/logout', allowCredentials, requireAuth, Auth.logout)

export { router }
