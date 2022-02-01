const chatlol = require("venom-bot");
const {
    step
} = require("./models/stages");
const {
    verifySummoner
} = require('./functions/verifySummoner');
const {
    temp_db
} = require("./models/temp-db");

chatlol.create().then((client) => start(client)).catch((erro) => {
    console.log(erro);
});

async function start(client) {
    client.onIncomingCall(async (call) => {
        console.log("Ligação recusada de: " + parseFloat(call.peerJid));
        await client
            .sendText(call.peerJid, "Desculpe, não atendemos ligações.")
            .then(async () => {
                client.blockContact(call.peerJid);
            });
        setInterval(async () => {
            await client.unblockContact(call.peerJid);
        }, 1000);
    });

    client.onMessage(async (message) => {
        console.log(temp_db[message.from])
        const isValidNumber = client.checkNumberStatus(message.from);
        if (message.isGroupMsg === false && isValidNumber) {
            const stage = await verifySummoner(message);
            await step[stage].obj.execute(
                message.from,
                message.body,
                message.sender.name,
                client,
                message
            );
        }
    });
}