
export default class UrlHash{

    static toObject(){
        let hash = window.location.hash.substr(1);

        return hash.split('&').reduce(function (res, item) {
            let parts = item.split('=');
            res[parts[0]] = parts[1];
            return res;
        }, {});
    }
}
