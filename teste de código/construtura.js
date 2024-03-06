// função construtora -> objeto
// função fábrica -> objeto
// construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
  //pricadas
  const ID = 12345;

  const metadoInterno = function () {};

  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metado = function () {
    console.log(this.nome + " meu metado");
  };
}
const p1 = new Pessoa("rodrigo", "t800");
const p2 = new Pessoa("renan", "silva");

p2.metado();
