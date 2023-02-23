import { View, Text, TextInput } from "react-native";
import React from "react";
import Container from "../components/container";
import Caption from "../components/caption";
import CustomTextInput from "../components/customTextInput";
import Spacing from "../components/spacing";
import ButtonText from "../components/buttonText";

const AddEarnings = () => {
  return (
    <Container>
      <Caption>título</Caption>
      <CustomTextInput placeholder="digite o título" />
      <Spacing height={16} />
      <Caption>valor</Caption>
      <CustomTextInput placeholder="digite o valor" />
      <Spacing height={16} />
      <ButtonText>mês/ano correspondente</ButtonText>
    </Container>
  );
};

export default AddEarnings;
