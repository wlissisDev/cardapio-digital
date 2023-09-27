import express from "express";

const app= express();
app.use(express.json());

app.listen(5000||process.env.PORT, ()=>console.log("server is running"));