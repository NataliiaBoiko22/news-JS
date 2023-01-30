
import News from './news/news';
import Sources from './sources/sources';
import { IntData } from '../../types/interface/interface';
import { IntDataSource } from '../../types/interface/interface';

export class AppView {
    protected news: News;
    protected sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data?: IntData): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data?: IntDataSource): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
