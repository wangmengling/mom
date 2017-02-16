const dgram = require('dgram');
const udpSocket = dgram.createSocket('udp4');

udpSocket.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  udpSocket.close();
});

udpSocket.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

udpSocket.on('listening', () => {
  var address = udpSocket.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

udpSocket.bind({
  address: 'localhost',
  port: 41234,
  exclusive: true
});

export default udpSocket
