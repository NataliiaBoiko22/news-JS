
import AppController from '../controller/controller';
import { AppView } from '../view/appView';
class App {
    controller;
    view;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }
    start() {
        const sources = document.querySelector('.sources');
        sources.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}
export default App;

