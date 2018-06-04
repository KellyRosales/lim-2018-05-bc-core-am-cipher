window.cipher ={
  encode: (offset,string) =>{

    let complete= '';
    
    for (let i=0; i<string.length ; i++){
      let position= parseInt(offset);
      let sentence=string.charCodeAt(i); 
        //usamos charCodeAt para obtener el codigo ASCII de las letras insertads y fromChartcode para convertir el codigo en letras

      if(sentence>=65 && sentence<=90) {      
        complete=complete + String.fromCharCode((sentence - 65 + position)%26 + 65);
        //para letras en mayúsculas
      } else if(sentence>=97 && sentence<=122) {
        complete=complete + String.fromCharCode((sentence - 97 + position)%26 + 97);
        //para letras en minúsculas
      } else if(sentence== 32) {
        complete += ' ';
        //opción de insertar un espacio 
      } else {
        complete=alert('Ingrese solo letras');
        //previniendo errores
      }
    }

    return complete;  
  },
    
  decode:(offset,string) => {
    let completeD='';
  
    for (var i=0; i<string.length ; i++) {
      let positionD=parseInt(offset);
      let sentenceD=string.charCodeAt(i);

      if(sentenceD>=65 && sentenceD<=90) {      
        completeD=completeD+String.fromCharCode(((sentenceD-65)+(26-(positionD%26)))%26+65);  
        //para letras en mayúsculas
      } else if(sentenceD>=97 && sentenceD<=122) {
        completeD=completeD+String.fromCharCode(((sentenceD-97)+(26-(positionD%26)))%26+97);
        //para letras en minúsculas
      } else if(sentenceD== 32) {
        completeD += ' ';
        //opción de insertar un espacio 
      } else {
        completeD=alert('Ingrese solo letras');
        //previniendo errores
      }
    }
    return completeD
  },  
}