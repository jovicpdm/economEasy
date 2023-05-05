import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("database.db");

import { createTable } from "./database";

export const createEarning = () => {
  createTable(
    "earning",
    "id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, value DOUBLE, month INTEGER, year INTEGER"
  );
};

export const insertEarning = (title, value, month, year) => {
  createEarning();
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO earning(title, value, month, year) VALUES (?, ?, ?, ?)",
      [title, value, month, year],
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

