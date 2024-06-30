import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true,
})

export class Comment {
    @Prop({ required: true })
    blogId: number;

    @Prop({ required: true })
    slug: string;

    @Prop({ required: true })
    message: string;

    @Prop({ required: true })
    userId: string;

    @Prop({ required: true })
    userImg: string;

}

export const CommentSchema = SchemaFactory.createForClass(Comment);
