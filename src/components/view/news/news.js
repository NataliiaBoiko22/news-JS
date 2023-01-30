
import './news.css';
class News {
    draw(data) {
        const news = data.length >= 10 ? data.filter((item, index) => index < 10) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');
        news.forEach((item, index) => {
            const newsClone = newsItemTemp.content.cloneNode(true);
            if (index % 2) {
                const newsItem = newsClone.querySelector('.news__item');
                newsItem.classList.add('alt');
            }
            const newsMetaPhoto = newsClone.querySelector('.news__meta-photo');
            newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            const newsMetaAuthor = newsClone.querySelector('.news__meta-author');
            newsMetaAuthor.textContent = item.author || item.source.name;
            const newsMetaDate = newsClone.querySelector('.news__meta-date');
            newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            const newsDescriptionTitle = newsClone.querySelector('.news__description-title');
            newsDescriptionTitle.textContent = item.title;
            const newsDescriptionSource = newsClone.querySelector('.news__description-source');
            newsDescriptionSource.textContent = item.source.name;
            const newsDescriptionContent = newsClone.querySelector('.news__description-content');
            newsDescriptionContent.textContent = item.description;
            const newsDescriptionLink = newsClone.querySelector('.news__read-more a');
            newsDescriptionLink.setAttribute('href', item.url);
            fragment.append(newsClone);
        });
        const newsContent = document.querySelector('.news');
        newsContent.innerHTML = '';
        newsContent.appendChild(fragment);
    }
}
export default News;
