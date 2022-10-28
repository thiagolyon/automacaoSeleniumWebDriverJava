# language: pt

@desconto
Funcionalidade: Receber cupom de desconto qazando
  Eu como usuário da qazando
  quero receber um cupom de desconto
  para comprar um curso com valor reduzido

  @gerar-cupom
  Cenário: Visualizar código de desconto
    Dado que estou no site da qazando
    Quando eu preencho meu email
    E clico em ganhar cupom
    Então eu vejo o código de desconto

    @teste-falha
    Cenário: Teste com fala
      Dado que tenho cupom gerado
      Quando eu falho
