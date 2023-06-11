import { Router } from 'express'

import { ChatController } from '../controllers/chat'

const router = Router()

router.post('/', ChatController.createChat)
router.get('/', ChatController.getChat)
router.patch('/', ChatController.updateChat)
router.delete('/', ChatController.deleteChat)

router.post('/message', ChatController.appendMessage)
router.post('/send-history', ChatController.sendHistoryToOpenAi)

export { router }
