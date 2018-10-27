const mfrc522 = require('mfrc522-rpi');
const WebSocket = require('ws');
const wss = new WebSocket.Server({host: '0.0.0.0',port: 8000});
const SerialPort = require('serialport');

const port = new SerialPort('/dev/serial/by-id/usb-NewLand_Usb2Uart-if00');

wss.on('connection', function(ws){
  ws.on('message', function(message) {
    console.log(message);
  });
});


wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        if(client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });
};


port.on('readable', function() {
    const barCode = port.read().toString();
    wss.broadcast(barCode);
});




mfrc522.initWiringPi(0);

console.log("scanning...");
console.log("Please put chip or keycard in the antenna inductive zone!");
console.log("Press Ctrl-C to stop.");

setInterval(function(){

    //# reset card
    mfrc522.reset();

    //# Scan for cards
    let response = mfrc522.findCard();
    if (!response.status) {
        return;
    }
    console.log("Card detected, CardType: " + response.bitSize);

    //# Get the UID of the card
    response = mfrc522.getUid();
    if (!response.status) {
        console.log("UID Scan Error");
        return;
    }
    //# If we have the UID, continue
    const uid = response.data;
    const uidData = `${uid[0].toString(16)}${uid[1].toString(16)}${uid[2].toString(16)}${uid[3].toString(16)}`;
    console.log(uidData);

    wss.broadcast(uidData);

    //# Select the scanned card
    const memoryCapacity = mfrc522.selectCard(uid);
    console.log("Card Memory Capacity: " + memoryCapacity);

    //# This is the default key for authentication
    const key = [0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF];

    //# Authenticate on Block 8 with key and uid
    if (!mfrc522.authenticate(8, key, uid)) {
        console.log("Authentication Error");
        return;
    }

    //# Dump Block 8
    console.log("Block: 8 Data: " + mfrc522.getDataForBlock(8));

    //# Stop
    mfrc522.stopCrypto();

}, 500);
