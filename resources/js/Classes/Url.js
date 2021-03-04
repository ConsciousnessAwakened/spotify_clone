
export default class Url{

    static hashToObject(){
        let string = window.location.hash.substr(1);

        return this.stringToObject(string);
    }

    static paramsToObject(){
        let string = window.location.search.substr(1);

        return this.stringToObject(string.trim());
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
