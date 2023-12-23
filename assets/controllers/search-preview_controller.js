import { Controller } from '@hotwired/stimulus';
import { useDebounce, useClickOutside } from 'stimulus-use';

export default class extends Controller {
    static debounces = ['search'];
    static targets = ['result', 'input'];
    static values = {
        url: String,
    };

    connect() {
        useClickOutside(this);
        useDebounce(this);
    }

    onSearchInput(event) {
        this.search()
    }

    async search() {
        const params = new URLSearchParams({
            q: this.inputTarget.value,
            preview: 1,
        });
        const response = await fetch(`${this.urlValue}?${params.toString()}`);
        this.resultTarget.innerHTML = await response.text();
    }

    clickOutside() {
        this.resultTarget.innerHTML = '';
    }
}
