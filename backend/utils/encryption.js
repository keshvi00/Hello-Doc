const crypto = require('crypto');

const ENCRYPTION_KEY = Buffer.from(process.env.ENCRYPTION_KEY, 'hex'); // 32 bytes
const IV = Buffer.from(process.env.ENCRYPTION_IV, 'hex'); // 16 bytes

exports.encryptMessage = (text) => {
  const cipher = crypto.createCipheriv('aes-256-cbc', ENCRYPTION_KEY, IV);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

exports.decryptMessage = (encryptedText) => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', ENCRYPTION_KEY, IV);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};
