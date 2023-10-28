const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://mynameisdipakgupta:Dipak2000@dipakcluster.icffoko.mongodb.net/NodejsProject?retryWrites=true&w=majority").then(()=>{
    console.log("connection successfull");
}).catch((error)=>{
    console.log(error);
})