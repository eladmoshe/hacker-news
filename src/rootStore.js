import {observable, action} from "mobx"
import hn from "node-hn-api"
import {StoryModel} from "./storyModel";


class RootStore {
    @observable
    topStories = [];

    constructor(){
        this.fetchTopStories();
    }

    @action
    async fetchTopStories(){
        try {
            const topStories  = await hn.fetchTopStories(10);
            console.log(`got top stories response`, topStories);
            this.topStories = topStories.map(json => new StoryModel({
                postingTime: new Date(json.time),
                commentsNum: json.kids ? json.kids.length: 0,
                score: json.score,
                url: json.url,
                author: json.by,
                id: json.id,
                title: json.title,
            }));
            console.log(`fetched stories`, this.topStories)
        } catch (e) {
            console.error(`Failed to fetch top stories `,e);
            this.topStories = [];
        }

    }
}

export default new RootStore();