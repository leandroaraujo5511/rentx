import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  Calendar as CustomCalendar,
  DateData,
  LocaleConfig,
} from "react-native-calendars";
import { useTheme } from "styled-components";
import { generateInterval } from "./generateInterval";
import { ptBR } from "./locale.config";
LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

interface MarketDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  };
}

interface DayProps {
  year: number;
  month: number;
  day: number;
  timestamp: number;
  dateString: string;
}

interface CalenderProps {
  markedDates: MarketDateProps;
  onDayPress: (date: DateData) => void;
}

function Calendar({ markedDates, onDayPress }: CalenderProps) {
  const theme = useTheme();
  return (
    <CustomCalendar
      renderArrow={(direction) => (
        <Feather
          size={24}
          color={theme.colors.text}
          name={direction == "left" ? "chevron-left" : "chevron-right"}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontFamily: theme.fonts.secondary_600,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={String(new Date())}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}

export { Calendar, DayProps, MarketDateProps, generateInterval };
