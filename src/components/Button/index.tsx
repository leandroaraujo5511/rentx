import React from "react";
import { ActivityIndicator } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { Container, Title } from "./styles";
interface Props extends RectButtonProps {
  title: string;
  color?: string;
  loadind?: boolean;
  light?: boolean;
}
export function Button({
  title,
  color,
  enabled = true,
  loadind = false,
  light,
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
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
}
