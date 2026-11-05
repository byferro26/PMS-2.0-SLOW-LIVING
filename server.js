// Slow Living PMS — servidor estático mínimo para deploy no Railway.
// Serve o ficheiro único (HTML + React via CDN) a partir de /public.
// Nota: este é o protótipo de interface (persistência em localStorage, por
// browser). É um serviço separado do backend real de produção
// (byferro26/slow-living) — não partilham dados nem base de dados.

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public"), { extensions: ["html"] }));

app.get("/healthz", (req, res) => res.status(200).send("ok"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Slow Living PMS a correr na porta ${PORT}`);
});
