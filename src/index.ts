import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Running Node.js and Express.js with TypeScript");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
