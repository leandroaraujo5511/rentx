import React, { useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";
import { Bullet } from "../Bullet";

import { CarImage, CarImageWrapper, Container, ImageIndexes } from "./styles";

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

interface Props {
  imagesUrl: string[];
}
export function ImageSlider({ imagesUrl }: Props) {
  const [imageIndex, setImageIndex] = useState(0);
  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });
  return (
    <Container>
      <ImageIndexes>
        {imagesUrl.map((_, index) => (
          <Bullet key={index} active={index === imageIndex} />
        ))}
      </ImageIndexes>

      <FlatList
        data={imagesUrl}
        keyExtractor={(key) => key}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />
    </Container>
  );
}
