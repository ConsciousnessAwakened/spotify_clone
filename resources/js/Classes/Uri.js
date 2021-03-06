
export default class Uri {

    static hasValueAndProperty(value = '', property = '') {
        if (_.isEmpty(value) || _.isEmpty(property)) {
            return false;
        }

        return this.has(value) && this["toObject"](value).hasOwnProperty(property)
    }

    static has(value = '') {
        if (_.isEmpty(value)) return false;

        return !_.isEmpty(this["toObject"](value));
    }

    static toObject(value = '') {
        if (_.isEmpty(value)) return {};

        value = (value === 'params') ? 'search' : value;

        return this.stringToObject(window.location[value].substr(1));
    }

    static stringToObject(string) {

        if (_.isEmpty(string)) {
            return {};
        }

        return string.split('&').reduce(function (res, item) {
            let parts = item.split('=');
            res[parts[0]] = parts[1];
            return res;
        }, {});
    }
}
