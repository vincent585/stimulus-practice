import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static classes = [ "toggle" ]

    show() {
        this.element.classList.add(this.toggleClass)
    }
}