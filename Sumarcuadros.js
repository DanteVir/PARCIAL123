//Crear un programa en JavaScript que contenga una función que se llame sumarCuadros() 
//(no olvides llamarla para su ejecución) dicha función recibirá un parámetro llamado 
//arrayNumeros, el cual deberá ser recorrido con cualquiera de los ciclos que se conocen en 
//este lenguaje; 
// prueba const arrayNumero = [1,23,453,3267,12354, 123456]; 

function Sumarcuadros (arrayNumeros){
    let acumulador=0;
   for (let i=0 ;i<arrayNumeros.length;i++){
       if (acumulador+=Number(arrayNumeros[i]))
        {console.log("||"+arrayNumeros[i]+"||");}
       else (console.log ("error") );
   }
   return acumulador;
}
const arrayNumeros = [1,23,453,3267,12354,123456];
console.log(Sumarcuadros(arrayNumeros));