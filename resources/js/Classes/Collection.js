
export default class Collection {

    static concatKeys(collection, key, delimiter = '|') {
        if (!collection instanceof Array) {
            return false;
        }

        if (collection.length < 1) {
            return false;
        }

        return this.pluck(collection, key).join(delimiter);
    }

    /**
     * Get the elements in the array based on the given key
     *
     * @param  Array data
     * @param  int key
     * @param  int except
     * @return Array
     */
    static pluck(data, key, except = null) {
        var plucked = [];

        for (var i = 0; i < data.length; i++) {
            if (i !== except) {
                plucked.push(data[i][key]);
            }
        }

        return plucked;
    }

}
