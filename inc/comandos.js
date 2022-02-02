const comandos = {
    1: {
      cmd: "!elo",
      desc: "Para consultar o elo de alguma conta",
      guia: "[GUIA] Digite *!elo [nickname]*",
    },
    2: {
      cmd: "!info",
      desc: "Para consultar informações de algum invocador, como: main champion, mastery points, elo, level, etc",
      guia: "[GUIA] Digite *!info [nickname]*",
    },
    3: {
      cmd: "!winrate",
      desc: "Para verificar a winrate de um invocador",
      guia: "[GUIA] Digite *!winrate [nickname]*",
    },
    4: {
      cmd: "!addrole",
      desc: "Para adicionar uma main role em seu cadastro",
      guia: "[GUIA] digite *!addrole [top, jg, mid, adc ou sup]*",
    },
    5: {
      cmd: "!list",
      desc: "Para listar as contas em seu cadastro",
      guia: "[GUIA] digite *!list*",
    },
  };

  exports.comandos = comandos;
  