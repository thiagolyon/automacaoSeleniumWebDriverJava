$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desconto.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Receber cupom de desconto qazando",
  "description": "Eu como usuário da qazando\r\nquero receber um cupom de desconto\r\npara comprar um curso com valor reduzido",
  "id": "receber-cupom-de-desconto-qazando",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 9,
  "name": "Visualizar código de desconto",
  "description": "",
  "id": "receber-cupom-de-desconto-qazando;visualizar-código-de-desconto",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 8,
      "name": "@gerar-cupom"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que estou no site da qazando",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "eu preencho meu email",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "clico em ganhar cupom",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "eu vejo o código de desconto",
  "keyword": "Então "
});
formatter.match({
  "location": "DescontosStep.acessar_site_qazando()"
});
formatter.result({
  "duration": 3118464000,
  "status": "passed"
});
formatter.match({
  "location": "DescontosStep.eu_preencho_meu_email()"
});
formatter.result({
  "duration": 1103603400,
  "status": "passed"
});
formatter.match({
  "location": "DescontosStep.clico_em_ganhar_cupom()"
});
formatter.result({
  "duration": 97641900,
  "status": "passed"
});
formatter.match({
  "location": "DescontosStep.eu_vejo_o_código_de_desconto()"
});
formatter.result({
  "duration": 101381800,
  "status": "passed"
});
});