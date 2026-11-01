import dotenv from "dotenv";
import connectDB from "./config/datebase.js";
import app from "./app.js";

dotenv.config({
	path:`./.env`
});

const startServer = async () =>{
  try {
    await connectDB();

    app.on("error",(error)=>{
      console.log("Error",error);
      throw error;
    })

    app.listen(process.env.PORT,()=>{
      console.log(`Server is running on port:$(process.env.PORT)`);

    })
  } catch (error) {
   console.log("mongoDB connection failed",error);
    
  }
}

startServer();
