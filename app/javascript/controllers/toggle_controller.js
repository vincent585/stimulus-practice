import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [ "chase", "highlight" ]
    static classes = [ "toggle", "highlight" ]
    static values = { index: Number }

    show() {
        this.element.classList.add(this.toggleClass)
    }

    highlight() {
        if (this.highlightTarget.classList.contains(this.highlightClass)) {
            this.highlightTarget.classList.remove(this.highlightClass)
        }
        else {
            this.highlightTarget.classList.add(this.highlightClass)
        }

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