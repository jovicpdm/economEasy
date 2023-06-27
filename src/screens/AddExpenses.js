import React, { useState } from "react";
import { View } from "react-native";
import { Checkbox, Divider } from "react-native-paper";

import Container from "../components/container";
import Caption from "../components/caption";
import CustomTextInput from "../components/customTextInput";
import Spacing from "../components/spacing";
import CustomNumericInput from "../components/customNumericInput";
import Row from "../components/row";
import PrimaryButton from "../components/primaryButton";
import { insertExpense } from "../database/expenses";
import { color } from "../styles/palette";
import { createInstallmentExpense } from "../controller/ExpenseController";
createInstallmentExpense;

const AddExpenses = ({ navigation }) => {
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [numberInstallments, setNumberInstallments] = useState("1");
  const [prorated, setProrated] = useState(false);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  return (
    <Container flex={1}>
      <View style={{ justifyContent: "space-between", flex: 1 }}>
        <View>
          <Caption>título</Caption>
          <CustomTextInput
            placeholder="digite o título"
            value={title}
            onChangeText={setTitle}
          />
          <Spacing height={16} />
          <Row>
            <CustomNumericInput
              title="mês"
              minValue={0}
              maxValue={12}
              onChange={(val) => {
                console.log(val);
                setMonth(val);
              }}
            />
            <CustomNumericInput
              title="ano"
              minValue={2000}
              maxValue={2025}
              onChange={(val) => {
                setYear(val);
              }}
            />
          </Row>
          <Spacing height={16} />
          <Divider />
          <Spacing height={8} />
          <Row justifyContent="space-between">
            <Caption>parcelado</Caption>
            <Checkbox
              uncheckedColor={color.primary[700]}
              color={color.primary[500]}
              status={prorated ? "checked" : "unchecked"}
              onPress={() => setProrated(!prorated)}
            />
          </Row>
          <Spacing height={8} />
          <Divider />
          <Spacing height={16} />
          <Spacing height={16} />
          {prorated ? (
            <>
              <Caption>valor</Caption>
              <CustomTextInput
                placeholder="digite o valor"
                value={value}
                onChangeText={setValue}
              />
              <Spacing height={16} />
              <Caption>parcelas</Caption>
              <CustomTextInput
                placeholder="digite o número de parcelas"
                value={numberInstallments}
                onChangeText={setNumberInstallments}
              />
            </>
          ) : (
            <>
              <Caption>valor</Caption>
              <CustomTextInput
                placeholder="digite o valor"
                value={value}
                onChangeText={setValue}
              />
            </>
          )}
          <Spacing height={16} />
        </View>
        <PrimaryButton
          onPress={() => {
            if (prorated) {
              createInstallmentExpense(
                title,
                value,
                numberInstallments,
                month,
                year
              );
            } else {
              console.log("à vista");
              insertExpense(title, value, numberInstallments, 1, month, year);
            }
            // navigation.pop();
          }}
        >
          concluir
        </PrimaryButton>
      </View>
    </Container>
  );
};

export default AddExpenses;
