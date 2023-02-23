import { FlatList } from "react-native";
import React from "react";

import Container from "../components/container";
import Caption from "../components/caption";
import { color } from "../styles/palette";
import Spacing from "../components/spacing";
import InformationCard from "../components/informationCard";
import SubHeading from "../components/subheading";
import Body2 from "../components/body2";
import ButtonText from "../components/buttonText";

const Extract = ({ navigation }) => {
  const earnings = [
    {
      id: 1,
      title: "Salário",
      value: "R$ 3.000,00",
    },
    {
      id: 2,
      title: "Salário",
      value: "R$ 3.000,00",
    },
  ];

  const expenses = [
    {
      id: 1,
      title: "Cartão 1",
      value: "R$ 700,00",
    },
    {
      id: 2,
      title: "Cartão 2",
      value: "R$ 800,00",
    },
  ];

  return (
    <Container>
      <Spacing height={24} />
      <Caption color={color.gray[500]}>ganhos</Caption>
      <Spacing height={16} />
      <FlatList
        data={earnings}
        renderItem={({ item }) => (
          <>
            <InformationCard>
              <SubHeading>{item.title}</SubHeading>
              <Spacing height={4} />
              <Body2 color={color.secondary[500]}>{item.value}</Body2>
            </InformationCard>
            <Spacing height={8} />
          </>
        )}
      />
      <ButtonText>ver mais</ButtonText>
      <Spacing height={24} />
      <Caption color={color.gray[500]}>despesas</Caption>
      <Spacing height={16} />
      <FlatList
        data={expenses}
        renderItem={({ item }) => (
          <>
            <InformationCard>
              <SubHeading>{item.title}</SubHeading>
              <Spacing height={4} />
              <Body2 color={color.red[500]}>{item.value}</Body2>
            </InformationCard>
            <Spacing height={8} />
          </>
        )}
      />
      <ButtonText>ver mais</ButtonText>
    </Container>
  );
};

export default Extract;
