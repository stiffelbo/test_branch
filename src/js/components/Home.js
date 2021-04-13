import { templates } from '../settings.js';

class Home {
    constructor(element) {
        const thisHome = this;

        thisHome.render(element);
    }

    render(element) {
        const thisHome = this;

        thisHome.dom = {};
        const generatedHTML = templates.homeWidget();

        thisHome.dom.wrapper = element;
        thisHome.dom.wrapper.innerHTML = generatedHTML;
    }
}

export default Home;