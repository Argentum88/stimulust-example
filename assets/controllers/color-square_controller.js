import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    selectedColorId = null;
    static targets = ['colorSquare', 'select'];
    static values = { colorId: Number };

    connect() {
        this.selectTarget.classList.add('d-none')
    }

    colorIdValueChanged() {
        this.setSelectColor(this.colorIdValue)
    }

    selectColor(event) {
        this.setSelectColor(event.currentTarget.dataset.colorId)
    }

    setSelectColor(newColorId) {
        if (newColorId === this.selectedColorId) {
            this.findSelectedColorSquare().classList.remove('selected')
            this.selectedColorId = null
            this.selectTarget.value = ''
            return
        }

        this.selectedColorId = newColorId;

        this.colorSquareTargets.forEach((element) => {
            element.classList.remove('selected')
        })

        this.findSelectedColorSquare().classList.add('selected')
        this.selectTarget.value = this.selectedColorId
    }

    findSelectedColorSquare() {
        return this.colorSquareTargets.find((element) => {
            return element.dataset.colorId == this.selectedColorId
        })
    }
}
