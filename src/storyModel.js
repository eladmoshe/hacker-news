export class StoryModel {
    postingTime;
    author;
    title;
    url;
    score;
    commentsNum;
    id;
    constructor({id, postingTime, author, title, url, score, commentsNum}){
        this.id = id;
        this.postingTime = postingTime;
        this.author = author;
        this.title = title;
        this.url = url;
        this.score = score;
        this.commentsNum = commentsNum;
    }
}

//its posting time, author name, title, URL (in most stories), score and number of comments (threads)