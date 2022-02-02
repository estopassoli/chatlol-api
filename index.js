const chatlol = require("venom-bot");
const {
    step
} = require("./models/stages");
const {
    verifySummoner
} = require('./functions/verifySummoner');
const {
    tmp_db
} = require("./models/temp-db");

chatlol.create().then((client) => start(client)).catch((erro) => {
    console.log(erro);
});

function start(client) {
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

    setInterval(async () => {
        tmp_db = [];
    }, 12000000);
    client.onMessage(async (message) => {
        const isValidNumber = client.checkNumberStatus(message.from);
        if (message.isGroupMsg === false && isValidNumber) {
            const stage = await verifySummoner(message);
            // console.log(`index stage ${stage}`)
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