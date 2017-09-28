class GoogleClient {
    constructor(clientId, discoveryDocs, scope) {
        console.log("GoogleClient: created");
        this.gapi = window.gapi; //ugly but we need to live with this:(

        this.ready = false;
        this.config = {
            clientId,
            discoveryDocs,
            scope
        }
    }

    init = () => new Promise((resolve, reject) => {
        if (this.ready) {
            reject("GoogleClient: already initialized");
        }

        // Help here: https://developers.google.com/sheets/api/quickstart/js
        this.gapi.load('client:auth2', () => {
            console.log("GoogleClient: loaded");
            this.gapi.client.init({
                discoveryDocs: this.config.discoveryDocs,
                clientId: this.config.clientId,
                scope: this.config.scope
            }).then(() => {
                console.log("GoogleClient: initiated");
                this.gapi.auth2.getAuthInstance().isSignedIn.listen(this._updateSignInStatus);
                this._updateSignInStatus(this.gapi.auth2.getAuthInstance().isSignedIn.get());
                this.ready = true;
                resolve();
            });
        });
    });

    _updateSignInStatus = (isSignedIn) => {
        if (isSignedIn) {
            console.log("GoogleClient: logged in");
        } else {
            console.log("GoogleClient: not logged");
        }
    };

    isReady = () => {
        return this.ready;
    };

    isLoggedIn = () => {
        return this.gapi.auth2.getAuthInstance().isSignedIn.get();
    };

    logIn = () => {
        return this.gapi.auth2.getAuthInstance().signIn()
            .then(() => {
                console.log("Sign-in succeed :-)");
            })
            .catch(() => {
                console.log("Sign-in failed :-(");
            });
    };

    logOut = () => {
        this.gapi.auth2.getAuthInstance().signOut();
    };

    // updateSigninStatus = (isSignedIn) => {
    //     const {actions} = this.props;
    //     if (isSignedIn) {
    //         console.log("Logged in!");
    //         let manager = new SheetManager('12QJplmOB6Xqj0FGTCRoOH-LzRv1CfmZ6zlnz6IzzFRk', 'August');
    //         manager.listProjects(function (projects) {
    //             actions.loginWithGoogleCompleted(projects.map((project, index) => {
    //                 return {
    //                     id: index,
    //                     name: project.name
    //                 }
    //             }));
    //             console.log("Received projects" + projects);
    //         });
    //     } else {
    //         console.log("Not logged");
    //     }
    // }
    //
    // initClient = () => {
    //     console.log("Initing gapi!");
    //     window.gapi.client.init({
    //         discoveryDocs: Consts.DISCOVERY_DOCS,
    //         clientId: Consts.CLIENT_ID,
    //         scope: Consts.SCOPES
    //     }).then(() => {
    //         console.log("Inited!");
    //         window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
    //         this.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
    //     });
    // };
    //
    // componentDidMount() {
    //     window.gapi.load('client:auth2', this.initClient);
    // }
    //
    // render() {
    //     return (
    //         <div className="Login">
    //             <Header className="Login-header" title="Login"/>
    //             <div className="Login-main">
    //                 <div className="Login-button" onClick={this._loginButtonPressed}>Login with google</div>
    //             </div>
    //         </div>
    //     )
    // }
}

export default GoogleClient;