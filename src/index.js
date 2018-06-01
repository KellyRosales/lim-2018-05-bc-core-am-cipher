let textEncode = document.getElementById('textArea1');
let codeKey = document.getElementById('textArea2');

document.getElementById('buttonCipher').addEventListener('click', () => {
    document.getElementById('textArea3').value = cipher.encode(codeKey.value, textEncode.value )
    }
);

document.getElementById('buttonDecipher').addEventListener('click', () => {   
    document.getElementById('textArea3').value = cipher.decode(codeKey.value, textEncode.value )
    }
); 


