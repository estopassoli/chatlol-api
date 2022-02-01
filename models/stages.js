stages = {
    "menu-inicial":{
        desc: "Menu inicial do BOT",
        obj: require("../routes/menu-inicial"),
    },
    "1-cadastro":{
        desc: "Primeira etapa do cadastro de novos usuários",
        obj: require("../routes/cadastro/1-cadastro")
    },
    "1.1-cadastro":{
        desc: "Segunda etapa do cadastro de novos usuários",
        obj: require("../routes/cadastro/1.1-cadastro")
    },
    "1.2-cadastro":{
        desc: "Terceira etapa do cadastro de novos usuários",
        obj: require("../routes/cadastro/1.2-cadastro")
    },
    "1.3-cadastro":{
        desc: "Quarta etapa do cadastro de novos usuários",
        obj: require("../routes/cadastro/1.3-cadastro")
    },
    "2-cadastro":{
        desc: "Última etapa do cadastro de novos usuários",
        obj: require("../routes/cadastro/2-cadastro")
    },
}
exports.step = stages;