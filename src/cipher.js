window.cipher = {
  
  encode: (offset,string) => {
    //para llamar al offset y stringx
    
      var cipherText= ""; 
      //variable que contenga el mensaje del texto ingresado

      for ( i=0, i<string.length, i++) {
      //Añadiendo la función for para la lógica del código ASCII de las letras

        const chartText= (string.ChartCode(i)-65+33)%26+65;
        //USando la fórmula del código ASCII para obtener el número deseado

        const ChartTextTwo=string.fromCharCode (ChartText);
        //Devolviendo el valor encontrado en letras
    }
    return cipherText;
    console.log(ChartTextTwo);   
   }

          
  decode: (offset,String) => {
      var decipherText="";
      //variable que contenga el mensaje de texto ingresado
      for (i=0, i<string.length, i++) {
        const 



      }
    cipher.decode(offset,string)
    //USo el cipher.encode(offset,String) para hacer el llamado del DOM//
  }
};



return{
  encode: (string) => {}
}
