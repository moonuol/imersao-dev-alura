var nome = "Luana"
var notaPrimeiroBimestre = 5

var notaSegundoBimestre = 5

var notaTerceiroBimestre = 5

var notaQuartoBimestre = 5

 var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4
 
var notaFixada = notaFinal.toFixed(1);

notaPrimeiroBimestre = notaPrimeiroBimestre.toFixed(1);

notaSegundoBimestre = notaSegundoBimestre.toFixed(1);

notaTerceiroBimestre = notaTerceiroBimestre.toFixed(1);

notaQuartoBimestre = notaQuartoBimestre.toFixed(1);


console.log("Bem vinda " + nome + "!");

 console.log("Nota do primeiro bimestre= " + notaPrimeiroBimestre);
console.log("Nota do segundo bimestre= " + notaSegundoBimestre);
console.log("Nota do terceiro bimestre= " + notaTerceiroBimestre);
console.log("Nota do quarto bimestre= " + notaQuartoBimestre); 

console.log("Nota média final = " + notaFixada);

/*
Revisão
variáveis
string
console.log
to.Fixed
operações matemáticas
concatenação
*/