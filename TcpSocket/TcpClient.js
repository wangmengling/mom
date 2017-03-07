'use strict';

class TcpClient {

	constructor (socket) {
		this.address = socket.remoteAddress;
		this.port 	 = socket.remotePort;
		this.name    = `${this.address}:${this.port}`;
		this.socket  = socket;
	}

	receiveMessage (message) {
		this.socket.write(message);
	}

}
module.exports = TcpClient;
