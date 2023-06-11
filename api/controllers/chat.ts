import * as chatLogic from '../../logic/models/chat'
import { ahandler } from '../../errors/handle'

export class ChatController {
    @ahandler
    static async createChat(req: any, res: any) {
        res.json(await chatLogic.createChat(req.body))
    }

    @ahandler
    static async updateChat(req: any, res: any) {
        res.json(await chatLogic.updateChat(req.body))
    }

    @ahandler
    static async deleteChat(req: any, res: any) {
        res.json(await chatLogic.deleteChat(req.body))
    }

    @ahandler
    static async getChat(req: any, res: any) {
        res.json(await chatLogic.getChat(req.query))
    }

    @ahandler
    static async appendMessage(req: any, res: any) {
        res.json(await chatLogic.appendMessage(req.body))
    }
}
