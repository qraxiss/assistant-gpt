import * as sampleLogic from '../../logic/models/sample'
import { ahandler } from '../../errors/handle'

export class SampleController {
    @ahandler
    static async createSample(req: any, res: any) {
        res.json(await sampleLogic.createSample(req.body))
    }

    @ahandler
    static async updateSample(req: any, res: any) {
        res.json(await sampleLogic.updateSample(req.body))
    }

    @ahandler
    static async deleteSample(req: any, res: any) {
        res.json(await sampleLogic.deleteSample(req.body))
    }

    @ahandler
    static async getSample(req: any, res: any) {
        res.json(await sampleLogic.getSample(req.body))
    }
}
