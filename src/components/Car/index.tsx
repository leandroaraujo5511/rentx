import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import GasolineSvg from "../../assets/gasoline.svg";
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

interface CarData {
  brand: string;
  name: string;
  rent: {
    preriod: string;
    price: string;
  };
  thumbnail: string;
}
interface Props extends RectButtonProps {
  data: CarData;
}

export function Car({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Preriod>{data.rent.preriod}</Preriod>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>
          <Type>
            <GasolineSvg />
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
