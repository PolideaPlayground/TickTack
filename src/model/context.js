class Context {
    constructor(googleClient) {
        this.googleClient = googleClient;
        this.ready = false;
        this.started = false;
    }

    init = () => {
        if (this.started) {
            return Promise.reject("Context: already started");
        }
        this.started = true;
        return Promise.all([
            this.googleClient.init()
        ])
            .then(() => {
                this.ready = true;
            })
            .catch((err) => {
                this.started = false;
                console.log("Context: init failed => " + err);
            });
    };

    isReady = () => {
        return this.ready;
    }
}

export default Context;