const dotenv = require("dotenv");
dotenv.config({"path": "./properties.env"});
const app = require("./app"),
 mongoose = require("mongoose");

const db = process.env.MONGODB_URL.replace("<password>", process.env.MONGODB_PASSWORD);
// const db = process.env.LOCAL_URL;
mongoose.connect(db).then(()=>{
    console.log("DB started successfully")
}).catch(err=>{
    console.log(err);
});

const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`Server started listening on port ${port}`);
})