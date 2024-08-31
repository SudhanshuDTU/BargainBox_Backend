import { connect } from "mongoose";

const uri = "mongodb+srv://sudhanshu:sudhanshu@cluster0.xswaq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


connect(uri)
  .then(() => {
    console.log("db connected successfully.");
  })
  .catch((err) => {
    console.log("db connection error: ", err.message);
  });
