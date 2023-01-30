import './sources.css';
class Sources {
    draw(data) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');
        data.forEach((item) => {
            const source = sourceItemTemp;
            const sourceClone = source.content.cloneNode(true);
            const sourceItemName = sourceClone.querySelector('.source__item-name');
            sourceItemName.textContent = item.name;
            const sourceItem = sourceClone.querySelector('.source__item');
            sourceItem.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        const sources = document.querySelector('.sources');
        sources.append(fragment);
    }
}
export default Sources;
