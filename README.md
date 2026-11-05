# Slow Living PMS — protótipo

Interface da PMS "Slow Living" (futurista, assinatura "by FERRO"), com 5 temas
de cor (terracotta, sand, forest, slate, ocean) e tema claro/escuro automático.

## O que é isto

Este serviço serve **apenas a interface** — um único ficheiro HTML com React
carregado por CDN. Os dados (reservas, hóspedes, configurações) ficam
guardados no `localStorage` do browser de quem acede, por isso **não há
partilha de dados entre pessoas nem persistência num servidor**.

Isto é propositadamente **separado** do backend real de produção
(`byferro26/slow-living`, Node.js + Auth.js + SQLite, já em
`slow-living-production.up.railway.app`). Os dois não partilham base de
dados nem contas.

## Contas de demonstração

| Perfil        | Utilizador    | Password |
|----------------|---------------|----------|
| Admin          | `admin`       | `1234`   |
| Receção        | `rececao`     | `1234`   |
| Housekeeping   | `limpeza`     | `1234`   |
| Manutenção     | `manutencao`  | `1234`   |
| Restaurante    | `restaurante` | `1234`   |
| Cozinha        | `cozinha`     | `1234`   |

## Deploy local

```bash
npm install
npm start
```

Serve em `http://localhost:3000`.

## Deploy no Railway

Railway deteta automaticamente o Node.js a partir do `package.json`
(`npm install` + `npm start`). Não é preciso configuração adicional — basta
ligar este repositório a um novo serviço Railway.
