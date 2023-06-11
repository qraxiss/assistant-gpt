import { prop, getModelForClass } from '@typegoose/typegoose'

export class Sample {
    @prop({ required: true })
    public name!: string

    @prop()
    public age?: number
}

export const SampleModel = getModelForClass(Sample)
