const {SHA256}=require('crypto-js');
const jwt=require('jsonwebtoken');



var data={
    id: 10
}

var token=jwt.sign(data,"132");
console.log(`${token}`);

var decode=jwt.verify(token,"132");
console.log("decode: ",decode);