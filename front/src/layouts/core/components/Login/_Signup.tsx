import React, { FormEvent } from "react";
import FormInput from "../UI/FormInput/FormInput";
import Button from "../UI/button/Button";
import { PanelName } from "./Login";
import styles from "./_Signup.module.css";
import Auth from "@/firebase/authentication";

interface ISignup {
  changePanel: Function;
}

export default function _Signup({ changePanel }: ISignup) {
  const register = async (event: FormEvent) => {
    event.preventDefault();

    const email = (event.target as any).email.value;
    const password = (event.target as any).password.value;
    const name = (event.target as any).name.value;
    await new Auth()
      .registerWithEmailAndPassword(email, password, name)
      .then(() => changePanel(PanelName.LOGIN));
  };

  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12">
        <div className="mb-4">
          <h3 className="fw-bold">Cadastre-se de graça!</h3>
        </div>
        <form name="signupForm" onSubmit={(e) => register(e)}>
          <div className="mb-3 w-100">
            <FormInput
              type="email"
              className="w-100"
              name="email"
              placeholder="quero@ser.rico"
              label="Email"
              customUnderline
            />
          </div>
          <div className="mb-3 w-100">
            <FormInput
              type="text"
              className="w-100"
              name="name"
              placeholder="Tio Patinhas"
              label="Nome Completo"
              customUnderline
            />
          </div>
          <div className="mb-3 w-100">
            <div className="pwdMask">
              <FormInput
                type="password"
                className="w-100"
                name="password"
                placeholder="******"
                label="Senha"
                customUnderline
              />
            </div>
          </div>
          <div className="mb-3 w-100">
            <Button variant="primary" type="submit" className="w-100">
              Cadastrar
            </Button>
          </div>
        </form>
        <a
          className={styles.link}
          href="#"
          onClick={() => changePanel(PanelName.LOGIN)}
        >
          Já tem uma conta?
        </a>
      </div>
    </div>
  );
}
