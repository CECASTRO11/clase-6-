export default class Element {
    constructor(text) {
        this.text = text;
    }

    button() {
        return `<p><button>${this.text}</button></p>`;
    }
    imagen() {
        return `<p><img src="${this.text}"></p>`;
    }
    sonido() {
        return `<p><audio controls><source src="${this.text}" type="audio/ogg"></source></audio></p>`;
    }
    video() { 
    return `<p><video controls><source src= "${this.text}" type="video/mp4"></source></video></p>`;
    }
}