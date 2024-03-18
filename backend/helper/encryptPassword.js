const bcrypt = require("bcrypt");

function hashedPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 12, async function (err, hash) {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });
}

module.exports = hashedPassword;
