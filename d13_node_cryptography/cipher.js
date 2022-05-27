const { promisify } = require("util");
const scrypt = promisify(require("crypto").scrypt);
const randomBytes = promisify(require("crypto").randomBytes);
const { createCipheriv, createDecipheriv } = require("crypto");

async function encryptText(text, password, salt) {
  const algorithm = "aes-192-cbc";
  const key = await scrypt(password, salt, 24);
  const iv = await randomBytes(16);

  const cipher = createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return {
    encrypted,
    iv: iv.toString("hex"),
  };
}

// encryptText(
//   "test",
//   "myPassword",
//   "mySalt - 873289ec2n3c72b2n 2 $^$%YUSER^& M$#%^$#@W$ %#$& $%^$%^"
// );

async function decryptText(text, password, salt, ivHex) {
  const algorithm = "aes-192-cbc";
  const key = await scrypt(password, salt, 24);
  const iv = Buffer.from(ivHex, "hex");

  const decipher = createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(text, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

module.exports = {
  encryptText,
  decryptText,
};
