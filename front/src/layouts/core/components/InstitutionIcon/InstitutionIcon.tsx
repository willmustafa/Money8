import Image from "next/image";
import React from "react";

export type InstitutionType =
    | "bancodobrasil"
    | "bradesco"
    | "btg"
    | "c6"
    | "caixa"
    | "inter"
    | "itau"
    | "nubank"
    | "nuinvest"
    | "santander"
    | "sicoob";

interface IInstitutionIcon {
    institution: InstitutionType
}


export default function InstitutionIcon(props: IInstitutionIcon) {
  const src = `/institutions/${props.institution}.svg`;

  return <Image src={src} alt="bank logo" width={55} height={30} />;
}
