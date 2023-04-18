import React from "react";
import { ICard } from "./Card";

export default function _FullWidth(props: ICard) {
  return (
    <>
      {props.children}
    </>
  );
}
