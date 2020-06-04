const {SHA256}=require('crypto-js');
const jwt=require('jsonwebtoken');
const bcrypt =require('bcryptjs');//async lib

var pass="jee";
bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(pass,salt,(err,hash)=>{
        console.log(hash);
    })
})

var hashedpass="$2a$10$jQGAv6o/HpzXv3O6igMRsOTN1n3p57fuLxU6fKxxKOZW59FwP6plS";
bcrypt.compare(pass,hashedpass,(err,res)=>{
    console.log(res);
}
);

// var data={
//     id: 10
// }

// var token=jwt.sign(data,"132");
// console.log(`${token}`);

// var decode=jwt.verify(token,"132");
// console.log("decode: ",decode);