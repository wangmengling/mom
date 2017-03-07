var upload = require('./fileuploads.js');
function routes(app) {
  app.get("/login", function(req, res) {
    res.json({"sd":"asdf"})
    // res.sendFile(__dirname + '/static/index.html');
  });


  //文件上传服务
  app.post('/upload', upload.single('file'), function (req, res, next) {
    // console.log(req.file);
    // console.log(req);
      if (req.file) {
          res.send('文件上传成功')
          console.log(req.file);
          console.log(req.body);
      }else {
        res.send('失败')
      }
  });

  app.get("/udp/sockets", function(req, res) {
    console.log(req.query.context)
    var message = new Buffer("send from client" + req.query.context);
    // udpSocket.send(message,0,message.length,41234,"localhost",function(err,bytes) {
    //     //  udpSocket.close();
    // });
    // udpSocket.bind(function () {
      // udpSocket.setBroadcast(true);
    // });

    // udpSocketChat.send(message,0,message.length,48159,"localhost",function(err,bytes) {
    //
    // });
    // tcpSocket.write(massage);
    // console.log(tcpSocket)
    tcpSocketClient.write(message)
    res.json({ user: 'tobi' })
  });

}
export default routes
