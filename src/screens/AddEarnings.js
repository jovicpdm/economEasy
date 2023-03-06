import React, { useState } from "react";

import Container from "../components/container";
import Caption from "../components/caption";
import CustomTextInput from "../components/customTextInput";
import Spacing from "../components/spacing";
import ButtonText from "../components/buttonText";
import CustomNumericInput from "../components/customNumericInput";
import Row from "../components/row";

const AddEarnings = () => {
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState();

  return (
    <Container>
      <Caption>título</Caption>
      <CustomTextInput placeholder="digite o título" />
      <Spacing height={16} />
      <Caption>valor</Caption>
      <CustomTextInput placeholder="digite o valor" />
      <Spacing height={16} />
      <Row>
        <CustomNumericInput title="mês" />
        <CustomNumericInput title="ano" />
      </Row>
    </Container>
  );
};

export default AddEarnings;
