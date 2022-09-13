export default class MyDate {
    constructor(title) {
        this.title = title;
        this.date = new Date();
    }

    toString() {
        return JSON.stringify({
            date: this.date.toJSON(),
            title: this.title,
        })
    }
}