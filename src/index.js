let textEncode = document.getElementById('textArea1');
let codeKey = document.getElementById('textArea2');
let textDecode = document.getElementById('textArea3');

let cipherButton = document.getElementById('buttonCipher');

cipherButton.addEventListener('click',() => {
    let aaa =  textEncode.value 
    let bbb = codeKey.value
 textArea3.innerHTML = cipher.encode(bbb, aaa);
}
)

let decipherButton = document.getElementById('buttonDecipher');

decipherButton.addEventListener('click',()=>{
    let ccc =  textEncode.value 
    let ddd = codeKey.value
 textArea3.innerHTML = cipher.decode(ddd, ccc);
}
)


