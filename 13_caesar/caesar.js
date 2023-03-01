const caesar = function(phrase, shiftNum) {
  phrase = phrase.split("");
  encryptedPhrase = [];
  for(var letter of phrase) {
    if (letter.toLowerCase() === letter.toUpperCase()) {
      encryptedPhrase.push(letter);
    } else {
      let originCharCode = letter.charCodeAt();
      let charCode = originCharCode + shiftNum;
      charCode = shiftLetterCharCode(originCharCode, charCode);
      encryptedPhrase.push(String.fromCharCode(charCode));
    }
  };
  return encryptedPhrase.join("");
};

function shiftLetterCharCode(originCharCode, charCode) {
  const a_CHARCODE = "a".charCodeAt();
  const z_CHARCODE = "z".charCodeAt();
  const A_CHARCODE = "A".charCodeAt();
  const Z_CHARCODE = "Z".charCodeAt();

  let minCharCode = a_CHARCODE;
  let maxCharCode = z_CHARCODE;
  if (A_CHARCODE <= originCharCode && originCharCode <= Z_CHARCODE) {
    minCharCode = A_CHARCODE;
    maxCharCode = Z_CHARCODE;
  }
  while (charCode < minCharCode || maxCharCode < charCode) {
    if (charCode < minCharCode) 
      charCode = maxCharCode - (minCharCode - charCode) + 1;
    else if (maxCharCode < charCode) 
      charCode = charCode - maxCharCode + minCharCode - 1;
  }
  return charCode;
}

// Do not edit below this line
module.exports = caesar;
