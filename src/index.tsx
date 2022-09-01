import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "freelancer",
          type: "deposit",
          category: "dev",
          amount: 600,
          createdAt: new Date("2021-08-1 09:08:00"),
        },
        {
          id: 2,
          title: "alimentacão",
          type: "withdraw",
          category: "despesas",
          amount: 100,
          createdAt: new Date("2021-08-1 09:08:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("/transaction", data);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
