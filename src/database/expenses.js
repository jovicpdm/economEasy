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
  createExpense();
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO expense(title, value, numberInstallments, installmentNumber, month, year) VALUES (?, ?, ?, ?, ?, ?)",
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

export const getExpenses = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM expense",
      [],
      (_, { rows }) => {
        const result = rows._array;
        console.log(result);
      },
      (_, error) => {
        console.error(error);
      }
    );
  });
};

export const getFilterExpense = (month, year) => {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM expense WHERE month = ? AND year = ?",
      [month, year],
      (_, { rows }) => {
        const result = rows._array;
        console.log(result);
      },
      (_, error) => {
        console.error(error);
      }
    );
  });
};
