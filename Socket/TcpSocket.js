var events = require('events');
var net = require('net');
import protoBuf from '../proto/Protodef.js'

// #设置
var channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};
// #绑定发射器
channel.on('join',function(id,client){
  // #添加join事件的监听器，保存用户的client对象，以便程序可以将数据发送给用户
  this.clients[id] = client;
  // #连接人数
  var num = "Welcome!\n" + 'Guest online:' + this.listeners('broadcast').length;

  console.log(num)

  client.write('num is '+ num);
  this.subscriptions[id] = function(senderId,message){
    // #忽略发出这一广播数据的用户
    if(id != senderId){
      console.log("==id"+id+"==="+senderId)
      this.clients[id].write(id +':'+ message);
    }
  }
  // #添加一个专门针对当前用户的broadcast事件监听器
  this.on('broadcast',this.subscriptions[id]);
});
// #创建一个在用户断开连接时能打扫战场的监听器
channel.on('leave',function(id){
  channel.removeListener('broadcast',this.subscriptions[id]);
  channel.emit('broadcast',id,id+' has left the chat.\n');
});
// #关闭聊天服务 但不关闭服务器
channel.on('shutdown',function(){
  channel.emit('broadcast','',"Chat has shut down.\n");
  channel.removeAllListeners('broadcast');
})
// #增加监听器数量 channel 是事件发射器
channel.setMaxListeners(50);



var HOST = '127.0.0.1';
var PORT = 6969;

// 创建一个TCP服务器实例，调用listen函数开始监听指定端口
// 传入net.createServer()的回调函数将作为”connection“事件的处理函数
// 在每一个“connection”事件中，该回调函数接收到的socket对象是唯一的
var  tcpSocket = net.createServer(function(sock) {
    var id = sock.remoteAddress + ':' + sock.remotePort;

    channel.emit('join',id,sock);
    // 为这个socket实例添加一个"data"事件处理函数
    sock.on('data', function(data) {

        // console.log('DATA ' + sock.remoteAddress + ': ' + data);
        // 回发该数据，客户端将收到来自服务端的数据
        // data = data.toString();
        // console.log('id-- ' + id)
        // if(data == "shutdown\r\n"){
        //   channel.emit('shutdown');
        // }
        channel.emit('broadcast',id,data);
        // sock.write(data)
    });

    // 为这个socket实例添加一个"close"事件处理函数
    sock.on('close', function(data) {
        console.log('CLOSED: ' +
            sock.remoteAddress + ' ' + sock.remotePort);
        channel.emit('leave',id);
    });
});

tcpSocket.on('listening', function () {
    console.log('Tcp Server listening on ' + tcpSocket.remoteAddress + ":" + tcpSocket.remotePort);
});

tcpSocket.listen(PORT, () => {
  console.log('服务器启动完毕TCP');
});
// .listen(PORT, HOST);

export default  tcpSocket
