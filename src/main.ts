import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
    res.send({
        ok: true,
        message: "it is ok",
        data: {
            teste: "abc samuel addams",
        },
    });
});

app.listen(8081, () => console.log("Server is running..."));
