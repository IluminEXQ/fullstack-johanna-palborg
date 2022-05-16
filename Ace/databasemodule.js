const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webbserver1', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {

    console.log("We are connected!")
});

const messagePostSchema = new mongoose.Schema({
    name: String,
    message: String
});

const MessagePost = mongoose.model('Messagepost', messagePostSchema);

function saveMessage(inName, inMessage){

    let newMessagePost = new MessagePost({
        name: inName,
        message: inMessage
    });

    newMessagePost.save()

}

exports.saveMessage = function (inName, inMessage){

    let newMessagePost = new MessagePost({
        name: inName,
        message: inMessage
    });

    newMessagePost.save()
}

