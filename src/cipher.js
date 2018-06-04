window.cipher ={
  encode: (offset,string) => {

    let complete= '';

    if(offset>0){
      code = parseInt(offset);
    } else {
      code = alert('ingrese solo números enteros positivos');
    }  // previniendo que solo se pueda insertar números en la clave del cifrado

    for (let i=0; i<string.length ; i++){
      let word=string.charCodeAt(i); 
        //usamos charCodeAt para obtener el codigo ASCII de las letras insertads y fromChartcode para convertir el codigo en letras
      if(word>=65 && word<=90) {      
        complete = complete + String.fromCharCode((word - 65 + offset)%26 + 65);
        //para letras en mayúsculas
      } else if(word>=97 && word<=122) {
        complete = complete + String.fromCharCode((word - 97 + offset)%26 + 97);
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
    if(offset>0) {
      codeD = parseInt(offset);
    } else {
      codeD = alert('ingrese solo números enteros positivos');
    }  // previniendo que solo se pueda insertar números en la clave del cifrado
  
    for (var i=0; i<string.length ; i++) {
      let wordD=string.charCodeAt(i);
        //usamos charCodeAt para obtener el codigo ASCII de las letras insertads y fromChartcode para convertir el codigo en letras
      if(wordD>=65 && wordD<=90) {      
        completeD = completeD+String.fromCharCode(((wordD-65)+(26-(offset%26)))%26+65);  
        //para letras en mayúsculas
      } else if(wordD>=97 && wordD<=122) {
        completeD = completeD+String.fromCharCode(((wordD-97)+(26-(offset%26)))%26+97);
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