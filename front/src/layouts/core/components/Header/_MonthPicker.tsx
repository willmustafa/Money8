import { selectMonthState, setMonth } from "@/store/month.slice";
import React from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";

export default function MonthPicker() {
  const selectedDate = useSelector(selectMonthState)
  const dispatch = useDispatch()

  return (
    <DatePicker
      selected={new Date(selectedDate)}
      onChange={(date) => dispatch(setMonth(date?.toISOString() ?? new Date()))}
      dateFormat="MMMM / yyyy"
      showMonthYearPicker
      showFullMonthYearPicker
      showFourColumnMonthYearPicker
    />
  );
}
