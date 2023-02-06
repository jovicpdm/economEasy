import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Body1 from "../components/body1";
import CenterContainer from "../components/centerContainer";
import HeadLine from "../components/headline";
import PrimaryButton from "../components/primaryButton";

const Welcome = () => {
  return (
    <CenterContainer>
      <Image
        source={require("../images/welcomeImage.png")}
        style={{ marginBottom: 24 }}
      />
      <HeadLine>bem vindo!</HeadLine>
      <Body1>
        o EconomEasy veio para facilitar sua vida financeira, de forma simples e
        sem necessidade de conexão com a internet
      </Body1>
      <PrimaryButton>COMEÇAR</PrimaryButton>
    </CenterContainer>
  );
};

const styles = StyleSheet.create({});

export default Welcome;
