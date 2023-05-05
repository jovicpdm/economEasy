import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("database.db");

import { createTable } from "./database";

export const createExpense = () => {
  createTable(
    "expense",
    "id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, value DOUBLE, installment INTEGER, month INTEGER, year INTEGER"
  );
};

export const insertExpense = (title, value, installment, month, year) => {
  createExpense();
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO expense(title, value, installment, month, year) VALUES (?, ?, ?, ?, ?)",
      [title, value, installment, month, year],
      (tx, results) => {
        console.log("Inserido com sucesso");
        console.log(results.rows);
      },
      (error) => {
        console.log("Erro ao inserir:", error);
      }
    );
  });
};
