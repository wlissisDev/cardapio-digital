import express from "express";
import cors from 'cors';
import { routes } from "./routes";

const app = express();
app.use(cors())
app.use(express.json());
app.use(routes)
// cors(
//     {
//         methods:"GET",
//         origin:"*",
//         credentials:true,
//         allowedHeaders:"X-Requested-With"
//     }
// )

app.listen(5000 || process.env.PORT, () => console.log("server is running"));