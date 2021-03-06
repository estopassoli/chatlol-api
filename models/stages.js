stages = {
    "comandos":{
        desc: "Todos os comandos primários do bot",
        obj: require("../routes/comandos")
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
    "1-smurf":{
        desc: "Cadastrar smurfs",
        obj: require("../routes/smurf/1-smurf")
    },
}

exports.step = stages;