window.cipher ={
  encode: (offset,string) => {
    let complete= '';

    for (let i=0; i<string.length ; i++){
      let code = parseInt(offset);
      let word=string.charCodeAt(i); 
        //usamos charCodeAt para obtener el codigo ASCII de las letras insertads y fromChartcode para convertir el codigo en letras
      if(word>=65 && word<=90) {      
        complete = complete + String.fromCharCode((word - 65 + code)%26 + 65);
        //para letras en mayúsculas
      } else if(word>=97 && word<=122) {
        complete = complete + String.fromCharCode((word - 97 + code)%26 + 97);
        //para letras en minúsculas
      } else if(word== 32) {
        complete += ' ';
        //opción de insertar un espacio 
      } else {
        complete = alert('Ingrese solo letras');
        //previniendo errores
      }
    }
    
    return complete;  
  },
    
  decode:(offset,string) => {
    let completeD='';
   
    for (var i=0; i<string.length ; i++) {
      let codeD = parseInt(offset);
      let wordD=string.charCodeAt(i);
        //usamos charCodeAt para obtener el codigo ASCII de las letras insertads y fromChartcode para convertir el codigo en letras
      if(wordD>=65 && wordD<=90) {      
        completeD = completeD+String.fromCharCode(((wordD-65)+(26-(codeD%26)))%26+65);  
        //para letras en mayúsculas
      } else if(wordD>=97 && wordD<=122) {
        completeD = completeD+String.fromCharCode(((wordD-97)+(26-(codeD%26)))%26+97);
        //para letras en minúsculas
      } else if(wordD== 32) {
        completeD += ' ';
        //opción de insertar un espacio 
      } else {
        completeD = alert('Ingrese solo letras');
        //previniendo errores
      }
    }
    return completeD
  },  
}
