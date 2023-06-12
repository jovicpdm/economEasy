import { insertExpense } from "../database/expenses";

export const createInstallmentExpense = (
  title,
  value,
  numberInstallments,
  month,
  year
) => {
  console.log("__________________________________");
  let auxMonth = month;
  let auxYear = year;
  let aux = 0;
  while (aux < numberInstallments) {
    if (auxMonth > 12) {
      auxMonth = 1;
      auxYear++;
    }
    insertExpense(title, value, numberInstallments, aux, auxMonth, auxYear);
    auxMonth++;
    aux++;
  }
};
