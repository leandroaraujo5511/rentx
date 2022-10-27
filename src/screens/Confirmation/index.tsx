import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StatusBar, useWindowDimensions } from "react-native";

import DoneSvg from "../../assets/done.svg";
import LogoSvg from "../../assets/logo_background_gray.svg";
import { ConfirmButton } from "../../components/ConfirmButton";
import { Container, Content, Footer, Message, Title } from "./styles";

interface Params {
  title: string;
  message: string;
  nextScreenRouter: string;
}

export function Confirmation() {
  const { width } = useWindowDimensions();
  const route = useRoute();
  const { title, message, nextScreenRouter } = route.params as Params;

  const navigation = useNavigation<any>();

  function handleConfirmRental() {
    navigation.navigate(nextScreenRouter);
  }
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Content>
      <Footer>
        <ConfirmButton title="Ok" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
