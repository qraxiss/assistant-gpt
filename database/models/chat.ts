import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose'

@modelOptions({
    schemaOptions: {
        _id: false
    }
})
export class Message {
    @prop({ required: true })
    public content!: string // content of the message

    @prop({ required: true })
    public role!: string // role of the message
}

@modelOptions({
    schemaOptions: {
        versionKey: false
    }
})
export class Chat {
    @prop({ required: true, unique: true })
    public name!: string // name of the history

    @prop({ required: true, type: () => [Message], default: [] })
    public history!: Message[] // messages of the history
}

export const ChatModel = getModelForClass(Chat)
