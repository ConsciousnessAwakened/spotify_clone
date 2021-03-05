import Message from "./Message";

export default class Statement {
    constructor(args = {}) {
        this.modules = _.isEmpty(args.modules) ? [] : args.modules;
        let types = _.isEmpty(args.types) ? ['message'] : args.types;

        if (_.isEmpty(this.modules)) {
            types.forEach(type => {
                this[type] = new Message;
            });
        } else {
            this.modules.forEach(property => {
                this[property] = types.reduce(function(result, item){
                    result[item] = new Message;
                    return result;
                }, {});
            });
        }
    }

    reset(module) {
        if (_.isEmpty(this.modules)) {
            Object.keys(this).forEach(type => {
                this[type] = new Message;
            });
        } else {

            if (_.isEmpty(module)) {
                this.modules.forEach(property => {

                    this[property] = Object.keys(this[property]).reduce(function(result, item){
                        result[item] = new Message;
                        return result;
                    }, {});
                });
            } else {
                this[module] = Object.keys(this[module]).reduce(function(result, item){
                    result[item] = new Message;
                    return result;
                }, {});
            }
        }
    }
}
