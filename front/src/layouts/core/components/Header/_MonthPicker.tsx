import { selectMonthState, setMonth } from "@/store/month.slice";
import React from "react";
import ReactDatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import ptBR from 'date-fns/locale/pt-BR';

export default function MonthPicker() {
  const selectedDate = useSelector(selectMonthState)
  const dispatch = useDispatch()

  return (
    <ReactDatePicker
      selected={new Date(selectedDate)}
      onChange={(date) => dispatch(setMonth(date?.toISOString() ?? new Date()))}
      dateFormat="MMMM / yyyy"
      locale={ptBR}
      showMonthYearPicker
      showFullMonthYearPicker
      showFourColumnMonthYearPicker
    />
  );
}
