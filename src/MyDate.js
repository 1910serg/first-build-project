export default class MyDate {
    constructor(title, img) {
        this.title = title;
        this.date = new Date();
        this.img = img;
    }

    toString() {
        return JSON.stringify({
            date: this.date.toJSON(),
            title: this.title,
            img: this.img,
        })
    }

    dateWithSlug() {
        return this.date + '__';
    }
}