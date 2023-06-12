import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("database.db");

import { createTable } from "./database";

export const createExpense = () => {
  createTable(
    "expense",
    "id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, value DOUBLE, numberInstallments INTEGER, installmentNumber INTEGER, month INTEGER, year INTEGER"
  );
};

export const insertExpense = (
  title,
  value,
  numberInstallments,
  installmentNumber,
  month,
  year
) => {
  console.log("teste");
  createExpense();
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO expense(title, value, numberInstallments, installmentNumber, month, year) VALUES (?, ?, ?, ?, ?)",
      [title, value, numberInstallments, installmentNumber, month, year],
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
