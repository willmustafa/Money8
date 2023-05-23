import React, { useEffect } from "react";
import styles from "./HomeLayout.module.css";
import Button from "../core/components/UI/button/Button";
import Image from "next/image";
import financeDoodle from "@/assets/images/backgrounds/finance-doodle.png";
import dashboard from "@/assets/images/backgrounds/dashboard.png";
import Navbar from "./components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Layout = ({ children }: React.PropsWithChildren) => {
  async function sendMessage(event: any) {
    let name = event.target.name.value;
    let email = event.target.email.value;
    let message = event.target.message.value;

    await axios.post("https://formspree.io/f/meqwjloj", {
      email,
      message: `Money8: From: ${name} - Message: ${message}`,
    });
  }

  return (
    <div className={styles.layout}>
      <Navbar />
      <main>
        <div className={styles.content}>
          <section
            id="home"
            className={`${styles.section} ${styles["bg-banner"]}`}
          >
            <div className="container">
              <div className="row align-items-end">
                <div className="col-xl-7 col-lg-8">
                  <div className={styles.hero}>
                    <h1>Tenha controle das suas finanças</h1>
                    <p>
                      Monitorar seus ganhos, gastos e sonhos nunca foi tão
                      facil!
                    </p>
                    <Button
                      className="d-block mb-2 pt-3 pb-3 ps-5 pe-5"
                      variant="light"
                      lg
                    >
                      <b>Criar minha conta gratuitamente!</b>
                    </Button>
                  </div>
                </div>
                <div className="col-xl-5 text-center text-xl-start position-relative">
                  <div className={styles["banner-right"]}>
                    <Image src={financeDoodle} alt="doodle" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="about" className={styles.section}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 col-lg-5">
                  <div className="features-content">
                    <h1 className="mt-n4">
                      <b>Nunca mais se assuste com a conta no final do mês</b>
                    </h1>
                    <p className="mt-4">
                      Organize suas finanças de forma simples e rápida, com
                      opção para importar diretamente seu extrato do banco!
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className={styles.featureImage}>
                    <Image src={dashboard} alt="dashboard" />
                  </div>
                </div>
              </div>
            </div>
            <div className="container mt-5 pt-5">
              <div className={styles["featuresWrapper"]}>
                <div className="row">
                  <div className="col-md-4">
                    <div className={`${styles.featureItem} col-10`}>
                      <div className={styles.featureIcon}>
                        <FontAwesomeIcon icon={["fas", "file-lines"]} />
                      </div>
                      <h4>Controle total</h4>
                      <p>
                        Gastos, receitas, investimentos, gerencie tudo em um só
                        lugar.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className={`${styles.featureItem} col-10`}>
                      <div className={styles.featureIcon}>
                        <FontAwesomeIcon icon={["fas", "quote-left"]} />
                      </div>
                      <h4>Insights</h4>
                      <p>
                        Tudo é mais simples com a ajuda de gráficos explicativos
                        e mensagens de apoio.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className={`${styles.featureItem} col-10`}>
                      <div className={styles.featureIcon}>
                        <FontAwesomeIcon icon={["fas", "brain"]} />
                      </div>
                      <h4>Importar dados</h4>
                      <p>
                        Nos envie o arquivo do extrato do banco e nós
                        re-organizamos ele para você!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={`${styles.section} bg-dark-blue`}>
            <div className="container pt-5 mt-5 pb-5 mb-5">
              <div className="row">
                <div className="col-12">
                  <div className="text-center mb-4 col-12 d-flex justify-content-center">
                    <h1 className="text-light col-6">
                      <b>Nossa pilar é a simplicidade</b>
                    </h1>
                  </div>
                  <div className={styles.featureImage}>
                    <Image src={dashboard} alt="dashboard" />
                  </div>
                  <div className="text-center col-12 d-flex justify-content-center mt-5">
                    <p className="text-light col-6">
                      Chega de ficar montando planilhas ou usando aplicativos
                      que cobram para utilizar e só dificultam seu caminho para
                      o sucesso.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.section} id="contact">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center mb-5">
                  <h1>
                    <b>Quer fazer parte do projeto?</b>
                  </h1>
                </div>
                <div className="col-12">
                  <form method="POST" onSubmit={sendMessage}>
                    <div className="form-group">
                      <label htmlFor="name" className={styles.label}>
                        Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Willian Mustafa"
                        required
                        className={styles.input}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className={styles.label}>
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="ceo@google.com"
                        required
                        className={styles.input}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" className={styles.label}>
                        Message
                      </label>
                      <textarea
                        name="message"
                        placeholder="Quero contribuir e te mandar um PIX!"
                        required
                        className={styles.input}
                      ></textarea>
                    </div>
                    <Button variant="primary" type="submit" lg>
                      Enviar
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            <footer className={`${styles.footer} bg-dark-blue`}>
              <div className="container d-flex justify-content-between">
                <span>Feito por Willian Mustafa</span>
                <div className="d-flex gap-3">
                  <a href="https://github.com/willmustafa" target="_blank">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                  <a
                    href="https://www.instagram.com/back.tofront_/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/willianmustafa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </a>
                </div>
              </div>
            </footer>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Layout;
