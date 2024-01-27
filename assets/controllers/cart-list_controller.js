import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static values = {
        cartRefreshUrl: String
    }

    removeItem(event) {
        event.currentTarget.classList.add('removing');
        window.setTimeout(async () => {
            const response= await fetch(this.cartRefreshUrlValue);
            this.element.innerHTML = await response.text();
        }, 500);
    }
}
