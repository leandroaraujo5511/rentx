import React from "react";
import { ActivityIndicator } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { Container, Title } from "./styles";
interface Props extends RectButtonProps {
  title: string;
  color?: string;
  enabled?: boolean;
  loadind?: boolean;
}
export function Button({
  title,
  color,
  enabled = true,
  loadind = false,
  ...rest
}: Props) {
  const theme = useTheme();
  return (
    <Container
      {...rest}
      color={color ? color : theme.colors.main}
      enabled={enabled}
      style={{ opacity: enabled === false || loadind === true ? 0.5 : 1 }}
    >
      {loadind ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
