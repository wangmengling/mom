var ProtoBuf = require("protobufjs");
ProtoBuf.load("awesome.proto", function(err, root) {
    if (err) throw err;

    // Obtain a message type
    var AwesomeMessage = root.lookup("awesomepackage.AwesomeMessage");

    // Create a new message
    var message = AwesomeMessage.create({ awesomeField: "AwesomeString" });

    // Encode a message to an Uint8Array (browser) or Buffer (node)
    var buffer = AwesomeMessage.encode(message).finish();
    // ... do something with buffer
    console.log(buffer)
    // Or, encode a plain object
    var buffer = AwesomeMessage.encode({ awesomeField: "AwesomeString" }).finish();
    // ... do something with buffer

    // Decode an Uint8Array (browser) or Buffer (node) to a message
    var message = AwesomeMessage.decode(buffer);

    console.log(message)
    // ... do something with message

    // If your application uses length-delimited buffers, there is also encodeDelimited and decodeDelimited.
});
