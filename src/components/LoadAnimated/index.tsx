import LottieView from "lottie-react-native";
import React from "react";
import loadingCar from "../../assets/loadingCar.json";
import { Container } from "./styles";

export function LoadAnimated() {
  return (
    <Container>
      <LottieView
        source={loadingCar}
        autoPlay
        style={{ height: 200 }}
        resizeMode="contain"
        loop
      />
    </Container>
  );
}
