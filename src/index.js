let textEncode = document.getElementById('textArea1');
let codeKey = document.getElementById('textArea2');
let textDecode = document.getElementById('textArea3');

let cipherButton = document.getElementById('buttonCipher');
cipherButton.addEventListener('click',() => { 
    textDecode.innerHTML = cipher.encode(codeKey.value, textEncode.value )
    }
);

let decipherButton = document.getElementById('buttonDecipher');
decipherButton.addEventListener('click',()=>{
    textDecode.innerHTML = cipher.decode(codeKey.value, textEncode.value )
    }
);
