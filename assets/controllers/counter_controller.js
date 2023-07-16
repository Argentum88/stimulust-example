import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    connect() {
        this.element.textContent = 'You have clicked me 0 times';
        this.count = 0;

        this.element.addEventListener('click', () => {
            this.count++;
            this.element.textContent = `You have clicked me ${this.count} times`;
        });
    }
}
