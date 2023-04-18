import React from "react";
import { ICard } from "./Card";

export default function _CommonCard(props: ICard) {
  return (
    <div>
      <h4 className="w-100">
        <b>{props.title}</b>
      </h4>
      <div className="row w-100">{props.children}</div>
    </div>
  );
}
