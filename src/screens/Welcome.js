import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Body1 from "../components/body1";
import CenterContainer from "../components/centerContainer";
import HeadLine from "../components/headline";
import PrimaryButton from "../components/primaryButton";
import Spacing from "../components/spacing";

const Welcome = ({ navigation }) => {
  return (
    <CenterContainer>
      <Image source={require("../images/welcomeImage.png")} />
      <Spacing height={24} />
      <HeadLine>bem vindo!</HeadLine>
      <Spacing height={12} />
      <Body1>
        o EconomEasy veio para facilitar sua vida financeira, de forma simples e
        sem necessidade de conexão com a internet
      </Body1>
      <Spacing height={60} />
      <PrimaryButton
        onPress={() => {
          navigation.push("main");
        }}
      >
        COMEÇAR
      </PrimaryButton>
    </CenterContainer>
  );
};

const styles = StyleSheet.create({});

export default Welcome;
