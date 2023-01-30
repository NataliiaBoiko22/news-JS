
import Loader from './loader';
import { IntKey } from '../../types/interface/interface';

class AppLoader extends Loader {
    public apiKey: IntKey | undefined;
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'dd7ccd0a32494fb691c471a79c824e0c', // получите свой ключ https://newsapi.org/
        }); 
    }
}

export default AppLoader; 