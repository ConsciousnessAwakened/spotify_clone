
export default class Collection {

    /**
     * Converts plucked collection value into delimited string
     *
     * @return string | boolean
     * @param collection
     * @param key
     * @param delimiter
     */
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
     * @return Array
     * @param data
     * @param key
     * @param except
     */
    static pluck(data, key, except = null) {
        let plucked = [];

        for (let i = 0; i < data.length; i++) {
            if (i !== except) {
                plucked.push(data[i][key]);
            }
        }

        return plucked;
    }

}
