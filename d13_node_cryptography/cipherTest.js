const { encryptText, decryptText } = require("./cipher");

const SALT =
  "sdfjhs#$%#$W&EWRHGS24326WT 23465 #@^#W%^ $W# &U$EW%^& q 3457w% $&UW$#% &# 76234% &#%&^W$# &#%^& 363Q^@$%^376Q#$^#&3y a35w67%U*$&Y";

(async () => {
  const encrypted = await encryptText(
    "Zażółć gęslą jaźń",
    "Bartku oto tajne haslo",
    SALT
  );

  console.log(encrypted);

  const decrypted = await decryptText(
    encrypted.encrypted,
    "Bartku oto tajne haslo",
    SALT,
    encrypted.iv
  );

  console.log(decrypted);
})();
