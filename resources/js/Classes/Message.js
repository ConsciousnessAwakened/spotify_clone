
export default class Message {
    constructor() {
        this.value = {}
    }

    get(field = null) {

        if (field === null) {
            return this.value;
        }

        return this.value[field] ? this.value[field] : this.value;
    }

    set(value) {
        this.value = value;
    }

    clear(field) {
        if (field) {
            delete this.value[field];
            return;
        }

        this.value = {};
    }
}
