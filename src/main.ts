import express from "express";
import cors from "cors";
import { logRequest } from "./middlewares/log-requests";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", logRequest, (_, res) => {
    res.send({
        ok: false,
        message: "it is ok",
        samuelAddams: {
            teste: "ABC samuel addams",
        },
    });
});

app.post("/", logRequest, (_, res) => {
    res.send({
        ok: true,
        message: "it is ok",
        samuelAddams: {
            teste: "abc samuel addams",
        },
    });
});

app.put("/", logRequest, (_, res) => {
    res.send({
        ok: true,
        message: "it is ok",
        samuelAddams: {
            teste: "abc samuel addams",
        },
    });
});

app.listen(8081, () => console.log("Server is running..."));
