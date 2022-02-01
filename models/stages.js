stages = {
    "menu-inicial":{
        desc: "Boas Vindas e apresentação",
        obj: require("../routes/menu-inicial"),
    },
    //cadastros
    "1-cadastro":{
        desc: "Cadastrar chatid e nome",
        obj: require("../routes/cadastro/1-cadastro"),
    },
    "1.1-cadastro":{
        desc: "Cadastrar nickname",
        obj: require("../routes/cadastro/1.1-cadastro"),
    },
    "1.2-cadastro":{
        desc: "Confirmar nickname",
        obj: require("../routes/cadastro/1.2-cadastro"),
    },
    "1.3-cadastro":{
        desc: "Confirmar nickname",
        obj: require("../routes/cadastro/1.3-cadastro"),
    },
    "2-cadastro":{
        desc: "Confirmar nickname",
        obj: require("../routes/cadastro/2-cadastro"),
    },
}
exports.step = stages;