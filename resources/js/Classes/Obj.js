
export default class Obj {

    static serialize(object) {
        if (_.isEmpty(object)) return '';

        return Object.keys(object).reduce(function (queryString, property) {
            queryString.push(encodeURIComponent(property) + "=" + encodeURIComponent(object[property]));
            return queryString;
        }, []).join("&");
    }
}
