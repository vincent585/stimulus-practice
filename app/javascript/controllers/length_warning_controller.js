import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static classes = [ "warn" ]
    static targets = [ "currentLength", "warn", "output" ]
    static values = { limit: Number, currentLength: Number }

    warn() {
        if (this.currentLengthValue >= this.limitValue - 20) {
            this.warnTarget.classList.add(this.warnClass)
            this.outputTarget.hidden = false
            this.outputTarget.classList.add(this.warnClass)
            this.outputTarget.textContent = `${this.currentLengthValue} / ${this.limitValue}`

        }
        else if (this.warnTarget.classList.contains(this.warnClass) && this.currentLengthValue < this.limitValue) {
            this.warnTarget.classList.remove(this.warnClass)
            this.outputTarget.hidden = true
        }
    }

    updateCurrentLength() {
        this.currentLengthValue = this.currentLengthTarget.value.length

        this.warn()
    }
}