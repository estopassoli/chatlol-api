function menuInicial() {
    return (
        `
🤖 ====== *Seja bem-vindo ao Chatbot League of Legends!* ====== 🤖
            
        Digite *!help* para ver uma lista com todos os comandos possíveis
        Para mais informações acesse nosso Discord <>
        *{chave-pix}*
        Faça uma doação para incentivar o nosso trabalho!
        NOTA: Ajudas monetárias são *totalmente opcionais*.
🤖 ============================================ 🤖
`
    )
}

function cadastro1(message){
    return(
        `Saudações, invocador!\nNotei que você ainda não tem um cadastro em nosso sistema!\nVi que seu nome aqui no WhatsApp é *${message.sender.pushname}*,\nvocê gostaria de fazer o cadastro com esse nome?`
    )
}

function cadastro1_1(boolean, message){
    if(boolean == "SIM"){
        return(
            `Agora digite seu NICK do League of Legends.`
        )
    }
    if(boolean == "NAO" || boolean == "NÃO"){
        return(
            `Ok, então me diga o nome que você quer que eu coloque no seu cadastro!`
        )
    }
    else{
        return(
            `Digite *Sim* para usar *${message.sender.pushname}* como nome ou digite *Não* para escrever um nome diferente para o cadastro.`
        )
    }
}

function cadastro1_2(msg) {
    return[
        `O nome escolhido digitado foi: ${msg}`,
        `Está correto?`
    ]
}

function cadastro1_3(boolean, message){
    if (boolean == "SIM"){
        return(
            `Agora digite seu *nick* do *League of Legends*`
        )
    }
    if (boolean == "NAO" || boolean == "NÃO"){
        return(
            `Ok, então me diga o nome que você quer que eu coloque no seu cadastro!`
        )
    }
    else{
        return(
            `Digite *Sim* para usar *${message.sender.pushname}* como nome ou digite *Não* para escrever um nome diferente para o cadastro.`
        )
    }
}

function cadastro2(boolean, message){
    if (boolean == "SIM"){
        return(
            `Pronto, cadastro realizado com sucesso!`
        )
    }
    if(boolean == "NÃO" || boolean == "NAO"){
        return(
            `Digite o seu *nick* do *League of Legends*!`
        )
    }
}

function cadastro2_getUser(){
    
}


module.exports = {
    menuInicial,
    cadastro1,
    cadastro1_1,
    cadastro1_2,
    cadastro1_3,
    cadastro2,
    cadastro2_getUser
}