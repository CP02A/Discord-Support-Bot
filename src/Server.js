class Server {
    /**
     * Constructor
     * @param server the server
     */
    constructor(server) {
        this.server = server;
        this.channels = [];
    }

    /**
     * Getter Method for Server
     * @returns {*} the server object
     */
    getServer() { return this.server; }

    addChannel(channel) { this.channels.push(channel); }

    getChannels() { return this.channels; }
}
 
exports.Server = Server;