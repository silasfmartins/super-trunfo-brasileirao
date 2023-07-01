const body = document.querySelector('body')
const main = document.querySelector('main')
const checkbox = document.querySelector("#checkbox")

checkbox.addEventListener('change', changeTheme)

function changeTheme() {
  document.body.classList.toggle('dark')

  if (body.classList.contains('dark')) {
    body.classList.remove('light')
    body.classList.add('dark')
    localStorage.setItem("theme", "light")
  }
  else {
    body.classList.remove('dark')
    body.classList.add('light')
    localStorage.setItem("theme", "dark")
  }
}

body.classList.add(localStorage.getItem("theme"))

var cartaFlamengo = {
  nome: "Flamengo",
  imagem:
    "https://static3.tcdn.com.br/img/img_prod/311840/mouse_pad_flamengo_escudo_30001_1_20210806213928.jpg",
  atributos: {
    ataque: 100,
    defesa: 100,
    qualidade: 100,
  },
};

var cartaInternacional = {
  nome: "Internacional",
  imagem:
    "https://internacional.com.br/static/placeholderNews2x-b5e64e028d55c1eeefc9cdf05a83b20f.png",
  atributos: {
    ataque: 90,
    defesa: 95,
    qualidade: 93,
  },
};

var cartaAtléticoMG = {
  nome: "Atlético-MG",
  imagem:
    "https://www.minhatorcida.com.br/imagens/post/11162/260x146xcapa-galo.jpg.pagespeed.ic.f6fd7b49c8.jpg",
  atributos: {
    ataque: 95,
    defesa: 60,
    qualidade: 77,
  },
};

var cartaSãoPaulo = {
  nome: "São Paulo",
  imagem:
    "https://i.pinimg.com/736x/d3/ea/e4/d3eae45dbc72483a7f155a295a68a554.jpg",
  atributos: {
    ataque: 85,
    defesa: 75,
    qualidade: 80,
  },
};

var cartaFluminense = {
  nome: "Fluminense",
  imagem:
    "https://i.pinimg.com/originals/59/88/ae/5988ae1deeba93cb6e0fa99a0a785536.png",
  atributos: {
    ataque: 80,
    defesa: 70,
    qualidade: 75,
  },
};

var cartaGrêmio = {
  nome: "Grêmio",
  imagem:
    "https://static3.tcdn.com.br/img/img_prod/311840/camiseta_gremio_escudo_feminina_azul_18893_3_20201130180041.jpg",
  atributos: {
    ataque: 70,
    defesa: 80,
    qualidade: 75,
  },
};

var cartaPalmeiras = {
  nome: "Palmeiras",
  imagem:
    "https://i.pinimg.com/736x/49/ce/25/49ce259a44c02bb4deb037dac8b9a54a.jpg",
  atributos: {
    ataque: 60,
    defesa: 90,
    qualidade: 75,
  },
};

var cartaSantos = {
  nome: "Santos",
  imagem:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Santos_logo.svg/1045px-Santos_logo.svg.png",
  atributos: {
    ataque: 65,
    defesa: 50,
    qualidade: 58,
  },
};

var cartaAthleticoPR = {
  nome: "Athletico Paranaense",
  imagem:
    "https://media-exp1.licdn.com/dms/image/C4D0BAQGGVpwRoKSopw/company-logo_200_200/0/1544615143113?e=2159024400&v=beta&t=Ov2U0f7SQIAw2_GUMC5Txx8B555xfqnBLPUumfUOofo",
  atributos: {
    ataque: 35,
    defesa: 85,
    qualidade: 60,
  },
};

var cartaRedBull = {
  nome: "Red Bull Bragantino",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeQiEpQpGkOSwr5GRQMUVDqrvgEcZlUldomw&usqp=CAU",
  atributos: {
    ataque: 55,
    defesa: 80,
    qualidade: 67,
  },
};

let cartaCeara = {
  nome: "Ceará SC",
  imagem: "https://cearasc.com/deploy/media/img/noticias/CEARA_1.jpg",
  atributos: {
    ataque: 75,
    defesa: 50,
    qualidade: 63,
  },
};

let cartaCorinthians = {
  nome: "Corinthians",
  imagem:
    "https://pbs.twimg.com/profile_images/1436027498924494855/0NrWdGnm_400x400.jpg",
  atributos: {
    ataque: 40,
    defesa: 55,
    qualidade: 48,
  },
};

let cartaAtleticoGO = {
  nome: "Atlético-GO",
  imagem:
    "https://conteudo.imguol.com.br/c/esporte/21/2020/06/19/terceiro-distintivo-do-atletico-go-lancado-em-2020-1592610482387_v2_450x600.png",
  atributos: {
    ataque: 45,
    defesa: 55,
    qualidade: 50,
  },
};

let cartaBahia = {
  nome: "Bahia",
  imagem:
    "https://upload.wikimedia.org/wikipedia/pt/thumb/9/90/ECBahia.png/120px-ECBahia.png",
  atributos: {
    ataque: 50,
    defesa: 35,
    qualidade: 47,
  },
};

let cartaSportRecife = {
  nome: "Sport Recife",
  imagem:
    "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Sport_Club_Recife.svg/150px-Sport_Club_Recife.svg.png",
  atributos: {
    ataque: 15,
    defesa: 55,
    qualidade: 35,
  },
};

let cartaFortaleza = {
  nome: "Fortaleza",
  imagem:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/FortalezaEsporteClube.svg/120px-FortalezaEsporteClube.svg.png",
  atributos: {
    ataque: 20,
    defesa: 65,
    qualidade: 43,
  },
};

let cartaVascoDaGama = {
  nome: "Vasco da Gama",
  imagem:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3454.png&w=100&h=100&transparent=true",
  atributos: {
    ataque: 25,
    defesa: 40,
    qualidade: 32,
  },
};

let cartaGoias = {
  nome: "Goiás",
  imagem:
    "https://a2.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F3395.png",
  atributos: {
    ataque: 30,
    defesa: 30,
    qualidade: 30,
  },
};

let cartaCoritiba = {
  nome: "Coritiba",
  imagem:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Coritiba_FBC_%282011%29_-_PR.svg/1200px-Coritiba_FBC_%282011%29_-_PR.svg.png",
  atributos: {
    ataque: 10,
    defesa: 45,
    qualidade: 28,
  },
};

let cartaBotafogo = {
  nome: "Botafogo",
  imagem:
    "https://logodownload.org/wp-content/uploads/2016/11/botafogo-logo-0-1536x1536.png",
  atributos: {
    ataque: 15,
    defesa: 35,
    qualidade: 25,
  },
};

var cartaMaquina;
var cartaJogador;
var cartas = [
  cartaFlamengo,
  cartaInternacional,
  cartaAtléticoMG,
  cartaSãoPaulo,
  cartaFluminense,
  cartaGrêmio,
  cartaPalmeiras,
  cartaSantos,
  cartaAthleticoPR,
  cartaRedBull,
  cartaCeara,
  cartaCorinthians,
  cartaAtleticoGO,
  cartaBahia,
  cartaSportRecife,
  cartaFortaleza,
  cartaVascoDaGama,
  cartaGoias,
  cartaCoritiba,
  cartaBotafogo,
];

function sortearCarta() {
  let numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];

  let numeroCartaJogador = parseInt(Math.random() * cartas.length);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnSortear").style.display = "none";
  document.getElementById("btnJogar").disabled = false;
  document.getElementById("btnJogar2").style.display = "block";
  document.getElementById("btnJogar2").disabled = false;
  exibeCartaJogador();
}

function exibeCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }

  var html = "<div id ='opcoes' class='carta-status'>";

  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var divResultado = document.getElementById("resultado");
  var atributoSelecionado = obtemAtributoSelecionado();

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = '<p class="resultado-final">Venceu</p>';
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = '<p class="resultado-final">Perdeu</p>';
  } else {
    htmlResultado = '<p class="resultado-final">Empatou</p>';
  }

  divResultado.innerHTML = htmlResultado;
  exibeCartaMaquina();
}

function exibeCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "<br>";
  }

  var html = "<div id ='opcoes' class='carta-status'>";

  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnJogar").style.display = "none";
  document.getElementById("btnJogar2").style.display = "none";
  document.getElementById("btnProximaRodada").disabled = false;
  document.getElementById("btnProximaRodada").style.display = "inline";
}

function proximaRodada() {
  document.location.reload(true);
}
