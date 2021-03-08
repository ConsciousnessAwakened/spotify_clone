
import Api from "./Api";

export default class Application extends Api{

    constructor(attributes) {
        super({
            address : attributes.address || {},
            scopes : attributes.scopes || []
        });

        this.name = attributes.name || "application"
    }

    get appName() {
        return this.name;
    }
}
