import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { CarDTO } from "../../dtos/CarDTO";
import { getAccessoriesIcon } from "../../utils/getAccessoriesIcon";
import {
  About,
  Brand,
  CarImage,
  Container,
  Details,
  Name,
  Preriod,
  Price,
  Rent,
  Type,
} from "./styles";

interface Props extends RectButtonProps {
  data: CarDTO;
}

export function Car({ data, ...rest }: Props) {
  const MotorIcon = getAccessoriesIcon(data.fuel_type);
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Preriod>{data.rent.period}</Preriod>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>
          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>
      <CarImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode="contain"
      />
    </Container>
  );
}
