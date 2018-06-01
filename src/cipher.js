window.cipher ={
  encode: (offset,string) =>{

    let complete= '';
    
    for (let i=0; i<string.length ; i++){
      let position= parseInt(offset);
      let sentence=string.charCodeAt(i); 
      /*usamos charCodeAt para obtener el codigo ASCII de las letras insertads*/

      if( sentence>=65 && sentence<=90){
        /*para letras en mayúscula,  usamos fromChartcode para convertir el codigo ASCII en letra */      
        complete=complete + String.fromCharCode((sentence-65+position)%26+65);

      }else if(sentence>=97 && sentence<=122 ) {
        /*para letras en minúsculas, usamos fromChartcode para convertir el codigo ASCII en letra */
        complete=complete +String.fromCharCode((sentence-97+position)%26+97);

      }else if(sentence== 32){
       /*opción de insertar un espacio */
        complete += ' ';
      }else {
        complete=alert('Ingrese solo letras');
          /*previniendo errores*/
      }
    }
    return complete;  
  },
    
  decode:(offset,string) => {
    let completeD='';
  
    for (var i=0; i<string.length ; i++) {
      let positionD=parseInt(offset);
      let sentenceD=string.charCodeAt(i);

      if( sentenceD>=65 && sentenceD<=90){      
        completeD=completeD+String.fromCharCode((sentenceD-65-positionD)%26+65);

      }else if(sentenceD>=97 && sentenceD<=122 ) {
        completeD=completeD+String.fromCharCode((sentenceD-97-positionD)%26+97);

      }else if(sentenceD== 32){
        completeD += ' ';

      }else {
        completeD=alert('Ingrese solo letras');
      }
    }
    return completeD
  },  
}