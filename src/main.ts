import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
    res.send({
        ok: false,
        message: "it is ok",
        samuelAddams: {
            teste: "abc samuel addams",
        },
    });
});

app.post("/", (_, res) => {
    res.send({
        ok: true,
        message: "it is ok",
        samuelAddams: {
            teste: "abc samuel addams",
        },
    });
});

app.put("/", (_, res) => {
    res.send({
        ok: true,
        message: "it is ok",
        samuelAddams: {
            teste: "abc samuel addams",
        },
    });
});

app.listen(8081, () => console.log("Server is running..."));
