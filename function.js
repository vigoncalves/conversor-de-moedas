//var valoremdolartexto = prompt('qual o valor em dolar que voce quer converter?')

//var valoremdolarnumero = parseFloat(valoremdolartexto)

///var  valoremreal = valoremdolarnumero * 5.50
// o valor em real é o valor em dolar numera x 1.05
//var valoremrealfixed = valoremreal.toFixed(2)

//alert( valoremrealfixed)


function converterMoeda(){
   var conteudoDoInput = document.getElementById('valor')
   var valorDoInput = conteudoDoInput.value
   var valorEmNumero = parseFloat(conteudoDoInput.value)
   var préResultado = valorEmNumero * 5.50
   var resultado = préResultado.toFixed(2)

   document.getElementById('resultado').value = resultado;

  

}














//for - percorre um bloco de código várias vezes
//for/in - percorre as propriedades de um objeto
//for/of - percorre os valores de um objeto iterável
//while - percorre um bloco de código enquanto uma condição especificada é verdadeira
//do/while - também percorre um bloco de código enquanto uma condição especificada é verdadeira

//length: Essa propriedade retorna o número de unidades de código presentes na string

//O método prompt () exibe uma caixa de diálogo que solicita a entrada do visitante.
// parseInt()  vai analisar a string e retornar um número inteiro.


//O método toFixed () converte um número em uma string, arredondando para um 
//número especificado de decimais.

//Nota: se o número desejado de decimais for maior 
//do que o número real, zeros são adicionados para criar o comprimento decimal desejado.