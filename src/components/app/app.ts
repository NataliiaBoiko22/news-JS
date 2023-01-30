

import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IntDataSource, IntData } from '../../types/interface/interface';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sources = document.querySelector('.sources') as HTMLElement;
        sources.addEventListener('click', (e: Event) =>
            this.controller.getNews(e, (data?: IntData) => this.view.drawNews(data))
        );
        this.controller.getSources((data?: IntDataSource) => this.view.drawSources(data));
    }
}

export default App;
