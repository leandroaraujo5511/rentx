import React from "react";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { CarDTO } from "../../dtos/CarDTO";
import { getAccessoriesIcon } from "../../utils/getAccessoriesIcon";
import {
  About,
  Accessories,
  Brand,
  CarImage,
  Container,
  Content,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
} from "./styles";

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { car } = route.params as Params;
  function handleConfirmRental() {
    navigation.navigate("Scheduling");
  }
  function handleBack() {
    navigation.goBack();
  }
  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
      </Header>
      <CarImage>
        <ImageSlider imagesUrl={car.photos} />
      </CarImage>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>{`R$ ${car.rent.price}`}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoriesIcon(accessory.type)}
            />
          ))}
        </Accessories>
        <About>{car.about}</About>
      </Content>
      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
