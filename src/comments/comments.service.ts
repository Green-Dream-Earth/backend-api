import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Comment } from './schema/comment.schema';
import { CommentsDto } from './dto/comments.dto';


@Injectable()
export class CommentsService {
    constructor(
        @InjectModel(Comment.name)
        private CommentsModel: mongoose.Model<Comment>,
    ) { }

    async getComments(blogSlug: string): Promise<Comment[]> {
        console.log("this is blog slug " + blogSlug)

        const comments = await this.CommentsModel
            .find({
                slug: blogSlug
            })

        return comments;
    }

    async createComment(comment: CommentsDto): Promise<Comment> {
        console.log(comment)
        const newComment = new this.CommentsModel(comment);

        return newComment.save();
    }
}