import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
    res.status(200).send({
        ok: false,
        message: "it is ok",
        data: {
            teste: "samuel addams",
        },
    });
});

app.listen(8081, () => console.log("Server is running..."));
