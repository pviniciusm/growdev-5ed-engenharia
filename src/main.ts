import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
    res.send({
        ok: false,
        message: "it is ok",
        samuelAddams: {
            teste: "ABC samuel addams",
        },
    });
});

app.get("/growcoins/:growcoins", (req: Request, res: Response) => {
    const growcoins = req.params.growcoins as string;
    const min: number = 1 
    const max: number = 100
    const result: number = Math.floor(Math.random() * (max - min + 1)) + min;
    const response = result * Number(growcoins)
    result === 100 
    ? res.status(200).send({
        ok: true,
        message: `Seu número aleatório é 100!!! Você ganhou o triplo de GrowCoins: ${response*3}!!!`,
    })
    : result > 50 && result !== 100
    ? res.status(200).send({
        ok: true,
        message: `Seu número aleatório maior que 50 é ${result}, você ganhou ${response} growcoins.`,
    })
    : result === 50 
    ? res.status(200).send({
        ok: true,
        message: `Seu número aleatório é exatamente 50! Você ganhou o dobro: ${response*2} GrowCoins`,
    })
    : res.status(418).send({
        ok: false,
        message: `Seu número aleatório é muito baixo, você perdeu todas as suas GrowCoins :(`,
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
