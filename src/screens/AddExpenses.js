import { View } from "react-native";
import React, { useState } from "react";

import Container from "../components/container";
import Caption from "../components/caption";
import CustomTextInput from "../components/customTextInput";
import Spacing from "../components/spacing";
import CustomNumericInput from "../components/customNumericInput";
import Row from "../components/row";
import PrimaryButton from "../components/primaryButton";
import { insertExpense } from "../database/expenses";
import { Checkbox } from "react-native-paper";

const AddExpenses = ({ navigation }) => {
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [installment, setInstallment] = useState(1);
  const [prorated, setProrated] = useState(false);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0.0);

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
          <Checkbox />
          <Spacing height={16}/>
          <Caption>valor</Caption>
          <CustomTextInput
            placeholder="digite o valor"
            value={value}
            onChangeText={setValue}
          />
          <Spacing height={16} />
        </View>
        <PrimaryButton
          onPress={() => {
            // insertExpense(title, value, month, year);
            navigation.pop();
          }}
        >
          concluir
        </PrimaryButton>
      </View>
    </Container>
  );
};

export default AddExpenses;
