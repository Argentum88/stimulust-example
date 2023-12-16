import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['colorSquare', 'select'];
    static values = { colorId: Number };

    connect() {
        this.selectTarget.classList.add('d-none');
    }

    colorIdValueChanged() {
        this.selectTarget.value = this.colorIdValue;
        this.colorSquareTargets.forEach((element) => {
            if (element.dataset.colorId == this.colorIdValue) {
                element.classList.add('selected');
            } else {
                element.classList.remove('selected');
            }
        });
    }

    selectColor(event) {
        const clickedColorId = event.currentTarget.dataset.colorId;
        this.colorIdValue = clickedColorId == this.colorIdValue ? null : clickedColorId;
    }
}
