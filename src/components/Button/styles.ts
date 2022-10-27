import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface Props {
  color: string;
}
interface ButtonsTextProps {
  light: boolean;
}
export const Container = styled(RectButton)<Props>`
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
  margin-bottom: 8px;
`;
export const Title = styled.Text<ButtonsTextProps>`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme, light }) =>
    light ? theme.colors.header : theme.colors.shape};
`;
