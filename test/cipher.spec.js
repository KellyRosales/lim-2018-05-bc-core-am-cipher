describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', ()=> {
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ") ,"HIJKLMNOPQRSTUVWXYZABCDEFG")
    });

    it('debería retornar "hijk" para "abcd" con offest 33',()=> {
        assert.equal(cipher.encode(33,"abcd"),"hijk")
    });

    it('debería retornar "hi jk" para  "ab cd" con offest 33',()=> {
      assert.equal(cipher.encode(33,"ab cd"),"hi jk")
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "AB" para "HI" con offest 33',()=> {
      assert.equal(cipher.decode(33,"HI"),"AB")
    });

    it('debería retornar "ab" para "hi" con offest 33',()=> {
      assert.equal(cipher.decode(33,"hi"),"ab")
    });

    it('debería retornar "hi jk" para "ab cd" con offest 33',()=> {
      assert.equal(cipher.decode(33,"hi jk"),"ab cd")
    });


  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado');

    });

  });
});
