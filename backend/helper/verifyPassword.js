const bcrypt = require('bcrypt');

function verifyPassword(plaintextPassword,hash){
    return new Promise((resolve,reject)=>{
        bcrypt.compare(plaintextPassword, hash, function(err, result) {

            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        });
    })
}



module.exports=verifyPassword
