import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("database.db");

export const createTable = (title, values) => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS " + title + " (" + values + ")",
      [],
      (_, result) => {
        console.log("tabela criada com sucesso");
      },
      (_, error) => {
        console.log("erro ao criar tabela, ", error);
      }
    );
  });
};

export const insertTable = (table, columns, values) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO " + table + "(" + columns + ")" + " VALUES (" + values + ")",
      [],
      (_, result) => {
        console.log("inserido com sucesso");
        console.log(result);
      },
      (_, error) => {
        console.log("erro ao inserir, " + error);
      }
    );
  });
};
