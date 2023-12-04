import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [ "chase" ]
    static classes = [ "toggle" ]
    static values = { index: Number }

    show() {
        this.element.classList.add(this.toggleClass)
    }

    chaseMe() {
        if (this.indexValue === this.chaseTargets.length - 1) {
            this.indexValue = 0
        }
        else {
            this.indexValue++
        }
    }

    indexValueChanged() {
        this.showCurrent()
    }

    showCurrent() {
        this.chaseTargets.forEach((element, index) => {
            element.hidden = index !== this.indexValue
        })
    }
}