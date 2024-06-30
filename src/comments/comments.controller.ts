import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Comment } from './schema/comment.schema';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) { }

    @Get()
    async getComments(@Query('blogSlug') blogSlug: string) {
        return this.commentsService.getComments(blogSlug);
    }

    @Post()
    async createComment(@Body() comment: Comment) {
        return this.commentsService.createComment(comment);
    }
}
