import React, { FormEvent } from "react";
import styles from "./FormUploader.module.css";
import Button from "../button/Button";

interface IFormUploader
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  text?: string;
  sendText?: string;
}

export default function FormUploader(props: IFormUploader) {
  function handleSubmit(e: any) {
    e.preventDefault();

    if (props.onSubmit) props.onSubmit(e);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.form}>
        <input type="file" {...props} />
        <p>
          {props.text
            ? props.text
            : "Clique ou arraste o arquivo para esta área"}
        </p>
      </div>
      <Button className="mt-4" variant="success" type="submit">
        {props.sendText ? props.sendText : "Enviar"}
      </Button>
    </form>
  );
}
