import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import ArrowSvg from "../../assets/arrow.svg";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import {
  Calendar,
  DayProps,
  generateInterval,
  MarketDateProps,
} from "../../components/Calendar";
import {
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Footer,
  Header,
  RentalPeriod,
  Title,
} from "./styles";

export function Scheduling() {
  const theme = useTheme();
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );
  const [markedDates, setMarkedDates] = useState<MarketDateProps>(
    {} as MarketDateProps
  );
  const navigation = useNavigation<any>();

  function handleConfirmRental() {
    navigation.navigate("SchedulingDetails");
  }
  function handleBack() {
    navigation.goBack();
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = generateInterval(start, end);
    setMarkedDates(interval);
  }
  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton color={theme.colors.shape} onPress={handleBack} />
        <Title>
          Escolha uma {"\n"}data de início e {"\n"}fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>18/08/2022</DateValue>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>18/08/2022</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
