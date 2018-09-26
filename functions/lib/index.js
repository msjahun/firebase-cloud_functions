"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
exports.onMessageCreate = functions.database
    .ref('/rooms/{roomId}/messages/{messageId}')
    .onCreate((snapshot, context) => {
    const roomId = context.params.roomId;
    const messageId = context.params.messageId;
    console.log('New message ${messageId} in room ${roomId}');
    const messageData = snapshot.val();
    const text = addPizzazz(messageData.text);
    //ref has admin previlegdes
    return snapshot.ref.update({ text: text });
});
exports.onMessageCreateChicken = functions.database
    .ref('/rooms/{roomId}/messages/{messageId}')
    .onCreate((snapshot, context) => {
    const roomId = context.params.roomId;
    const messageId = context.params.messageId;
    console.log('New message ${messageId} in room ${roomId}');
    const messageData = snapshot.val();
    const text = addChicken(messageData.text);
    //ref has admin previlegdes
    return snapshot.ref.update({ text: text });
});
function addPizzazz(text) {
    return text.replace(/\bpizza\b/g, '🍕');
}
function addChicken(text) {
    return text.replace(/\bchicken\b/g, '🍗');
}
//# sourceMappingURL=index.js.map