import React, { FormEvent, useState } from "react";
import styles from "./Login.module.css";
import Button from "../UI/button/Button";
import FormInput from "../UI/FormInput/FormInput";
import _Signup from "./_Signup";
import { toast } from "react-toastify";
import Auth from "@/firebase/authentication";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/user.slice";

export enum PanelName {
  LOGIN = "login",
  SIGNUP = "signup",
  FORGOT = "forgot",
}

export default function Login() {
  const navigate = useRouter()
  const dispatch = useDispatch()
  const [panelName, setPanelName] = useState(PanelName.LOGIN);

  const changePanel = (panel: PanelName) => {
    setPanelName(panel)
  }

  const login = async (event: FormEvent) => {
    event.preventDefault()

    const email = (event.target as any).email.value;
    const password = (event.target as any).password.value;
    await new Auth().signInWithEmailAndPassword(email, password).then((res) => {
      dispatch(setUser(res))
      navigate.push('/dashboard')
    })
  }

  return (
    <div className="d-flex">
      <div className={`col-sm-5 ${styles.panelLeft}`}>
        <div className={styles.socialLoginWrapper}>
          <div className="text-center">
            <div className="mb-3">
              <img src="/logo.png" alt="Logo" height={30} />
            </div>
            <p>Logar com redes sociais</p>
            <div className="row social-buttons">
              <div className="col-xs-4 col-sm-4 col-md-12">
                <Button variant="light">
                  <img
                    src="logos/google.svg"
                    alt="Logo"
                    height={15}
                  />{" "}
                  <span className="hidden-xs hidden-sm">Entrar com Google</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`col-sm-7 ${styles.panelRight}`}>
        <div className={styles.contentWrapper}>
          <div
            className={`${styles.contentInner} ${styles.login} ${
              panelName === PanelName.LOGIN && styles.active
            }`}
          >
            <div className="mb-3">
              <h3 className="fw-bold">Fazer Login</h3>
              <p className={styles.small}>
                Não tem uma conta?{" "}
                <a className={styles.link} href="#" onClick={() => changePanel(PanelName.SIGNUP)}>
                  Registre-se de graça!
                </a>
              </p>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12">
                <form name="loginForm" onSubmit={(e) => login(e)}>
                  <div className="mb-3 w-100">
                    <FormInput
                      type="email"
                      className="w-100"
                      name="email"
                      label="Email"
                      placeholder="quero@ser.rico"
                      customUnderline
                    />
                  </div>
                  <div className="mb-3 w-100">
                    <FormInput
                      variation="transparent"
                      type="password"
                      className="w-100"
                      name="password"
                      placeholder="******"
                      label="Senha"
                      customUnderline
                    />
                  </div>

                  <div className="row justify-content-between">
                    <div className="col-xs-6 col-sm-6 text-start">
                      <label className="checkbox">
                        <input type="checkbox" value="remember-me" />
                        <span className="label-text">Lembrar de mim</span>
                      </label>
                    </div>
                    <div className="col-xs-6 col-sm-6 text-end">
                      <p className="forgotPwd">
                        <a className={styles.link} href="#" onClick={() => changePanel(PanelName.FORGOT)}>
                          Esqueceu a senha?
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Button type="submit" variant="primary" className="w-100">
                      Entrar com email
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div
            className={`${styles.contentInner} ${styles.signup} ${
              panelName === PanelName.SIGNUP && styles.active
            }`}
          >
            <_Signup changePanel={changePanel} />
          </div>

          <div
            className={`${styles.contentInner} ${styles.forgot} ${
              panelName === PanelName.FORGOT && styles.active
            }`}
          >
            <div className="row">
              <div className="col-xs-12 col-sm-12">
                <div className="mb-3">
                  <h3 className="fw-bold">Recuperar a senha</h3>
                  <p>
                    Preencha seu email e vamos enviar uma mensagem com as
                    instruções
                  </p>
                </div>
                <form
                  name="forgetForm"
                >
                  <div className="mb-3 w-100">
                    <FormInput
                      type="email"
                      className="w-100"
                      name="username"
                      placeholder="sou@do.ri"
                      label="Email"
                      customUnderline
                    />
                  </div>
                  <div className="mb-3 w-100">
                    <Button type="submit" variant="primary">
                      Recuperar a Senha
                    </Button>
                  </div>
                  <div className="mb-2 w-100">
                    <a
                      className={styles.link}
                      href="#"
                      onClick={() => changePanel(PanelName.LOGIN)}
                    >
                      Já tem uma conta?
                    </a>
                  </div>
                  <div className="w-100">
                    <a
                      className={styles.link}
                      href="#"
                      onClick={() => changePanel(PanelName.SIGNUP)}
                    >
                      Não tem uma conta?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
