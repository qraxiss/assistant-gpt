import { requireAuth } from '../middlewares/requireAuth'
import { Router } from 'express'

import { SampleController } from '../controllers/sample'

const router = Router()

router.get('/', SampleController.getSample)
router.post('/', SampleController.createSample)
router.put('/', SampleController.updateSample)
router.delete('/', SampleController.deleteSample)

export { router }
