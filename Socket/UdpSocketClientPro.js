var dgram = require('dgram');
var ProtoBuf = require("protobufjs");
var PORT = 33333;
var HOST = '127.0.0.1';

var builder = ProtoBuf.loadProtoFile("./cover.helloworld.proto"),
    Cover = builder.build("cover"),
    HelloCoverReq = Cover.helloworld.helloCoverReq;
    HelloCoverRsp = Cover.helloworld.helloCoverRsp;

var hCReq = new HelloCoverReq({
    name: 'R U coverguo?'
})


var buffer = hCReq.encode();

var socket = dgram.createSocket({
    type: 'udp4',
    fd: 8080
}, function(err, message) {
    if(err) {
        console.log(err);
    }

    console.log(message);
});

var message = buffer.toBuffer();

socket.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if(err) {
        throw err;
    }

    console.log('UDP message sent to ' + HOST +':'+ PORT);
});

socket.on("message", function (msg, rinfo) {
    console.log("[UDP-CLIENT] Received message: " + HelloCoverRsp.decode(msg).reply + " from " + rinfo.address + ":" + rinfo.port);
    console.log(HelloCoverRsp.decode(msg));

    socket.close();

    //udpSocket = null;
});

socket.on('close', function(){
    console.log('socket closed.');


});

socket.on('error', function(err){
    socket.close();

    console.log('socket err');
    console.log(err);
});
