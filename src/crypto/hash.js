const { createHmac } = require('node:crypto');

const encode = (password) => {
  return createHmac('sha256', password)
      .update('My awesome cryptography T_T')
      .digest('hex')
}

const compareHashes = (input, hash) => {
    const inputHash = encode(input);
    return inputHash === hash
}

