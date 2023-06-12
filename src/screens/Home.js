import { View, Text, FlatList } from "react-native";
import React from "react";
import Container from "../components/container";
import InformationCard from "../components/informationCard";
import Caption from "../components/caption";
import Spacing from "../components/spacing";
import Title from "../components/title";
import SubHeading from "../components/subheading";
import Row from "../components/row";
import { color } from "../styles/palette";
import Body2 from "../components/body2";
import Body1 from "../components/body1";
import { Button, Portal } from "react-native-paper";
import ButtonText from "../components/buttonText";

const Home = () => {
  const installments = [
    {
      id: 1,
      title: "Samsung Galaxy S20FE",
      value: "R$ 2.000,00",
      installments: "8",
      paidInstallments: "3",
    },
    {
      id: 2,
      title: "Camisa",
      value: "R$ 200,00",
      installments: "2",
      paidInstallments: "1",
    },
    {
      id: 3,
      title: "Notebook",
      value: "R$ 4.000,00",
      installments: "8",
      paidInstallments: "3",
    },
  ];

  const targets = [
    {
      id: 1,
      title: "Viagem Disney",
      target: "R$ 5.000,00",
      saved: "R$ 3.000,00",
    },
    {
      id: 2,
      title: "Carro",
      target: "R$ 50.000,00",
      saved: "R$ 15.000,00",
    },
    {
      id: 3,
      title: "Moto",
      target: "R$ 15.000,00",
      saved: "R$ 4.400,00",
    },
  ];

  return (
    <Container>
      <Row justifyContent={"flex-end"}>
        <ButtonText>mês/ano</ButtonText>
      </Row>
      <Spacing height={16} />
      <InformationCard>
        <Caption>saldo previsto</Caption>
        <Spacing height={8} />
        <Title color={color.primary[500]}>R$ 1.500,00</Title>
        <Spacing height={8} />
        <Row>
          <SubHeading color={color.secondary[500]}> + R$ 3.000,00</SubHeading>
          <Spacing width={12} />
          <SubHeading color={color.red[500]}> - R$ 1.500,00</SubHeading>
        </Row>
      </InformationCard>
      <Spacing height={24} />
      <Caption color={color.gray[500]}>prestações</Caption>
      <Spacing height={16} />
      <FlatList
        horizontal
        data={installments}
        renderItem={({ item }) => (
          <>
            <InformationCard>
              <Body2>{item.title}</Body2>
              <Spacing height={4} />
              <Body2 color={color.primary[500]}>{item.value}</Body2>
              <Spacing height={4} />
              <Body1 color={color.gray[500]}>
                {item.paidInstallments + "/" + item.installments + " pagas"}
              </Body1>
            </InformationCard>
            <Spacing width={16} />
          </>
        )}
      />
      <Spacing height={24} />
      <Caption color={color.gray[500]}>cofrinho</Caption>
      <Spacing height={16} />
      <FlatList
        horizontal
        data={targets}
        renderItem={({ item }) => (
          <>
            <InformationCard>
              <Body2>{item.title}</Body2>
              <Spacing height={16} />
              <Row>
                <View style={{ alignItems: "center" }}>
                  <Caption color={color.gray[500]}>guardado</Caption>
                  <Body1 color={color.primary[700]}>{item.saved}</Body1>
                </View>
                <Spacing width={32} />
                <View style={{ alignItems: "center" }}>
                  <Caption color={color.gray[500]}>meta</Caption>
                  <Body1 color={color.primary[500]}>{item.target}</Body1>
                </View>
              </Row>
            </InformationCard>
            <Spacing width={16} />
          </>
        )}
      />
    </Container>
  );
};

export default Home;
