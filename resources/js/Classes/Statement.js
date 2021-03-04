import Message from "./Message";

export default class Statement {
    constructor(types = [], properties = []) {

        types = _.isEmpty(types) ? ['message'] : types;

        if (_.isEmpty(properties)) {

            types.forEach(type => {
                this[type] = new Message;
            });

        } else {

            let message = types.reduce(function(result, item){
                result[item] = new Message;
                return result;
            }, {});

            properties.forEach(property => {
                this[property] = Object.assign({}, message);
            });
        }
    }

    reset() {
        Object.keys(this).forEach(type => {
            this[type] = new Message;
        });
    }
}
