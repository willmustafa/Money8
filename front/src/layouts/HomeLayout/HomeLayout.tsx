import React from "react";
import styles from "./HomeLayout.module.css";
import Button from "../core/components/UI/button/Button";
import Image from "next/image";
import financeDoodle from "@/assets/images/backgrounds/finance-doodle.png";
import dashboard from "@/assets/images/backgrounds/dashboard.png";
import Navbar from "./components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Layout = ({ children }: React.PropsWithChildren) => {
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
          <section id="first" className={styles.section}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 col-lg-5">
                  <div className="features-content">
                    <h1 className="mt-n4">
                      <b>Fast &amp; powerful to get out of your way</b>
                    </h1>
                    <p>
                      Aenean amet netus aliquam elit eu, sagittis id natoque id.
                    </p>
                    <div className="features-counter">
                      <span>Trusted By </span>
                      <br />
                      <strong>
                        <span className="counter">3000</span>+
                      </strong>
                      <br />
                      <p>Company</p>
                    </div>
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
                        <FontAwesomeIcon icon={["fas", "clock"]} />
                      </div>
                      <h4>Deadlines will never surprise you again.</h4>
                      <p>
                        re here every step of the way making sure you and your
                        team deliver
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className={`${styles.featureItem} col-10`}>
                      <div className={styles.featureIcon}>
                        <FontAwesomeIcon icon={["fas", "clock"]} />
                      </div>
                      <h4>Deadlines will never surprise you again.</h4>
                      <p>
                        re here every step of the way making sure you and your
                        team deliver
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className={`${styles.featureItem} col-10`}>
                      <div className={styles.featureIcon}>
                        <FontAwesomeIcon icon={["fas", "clock"]} />
                      </div>
                      <h4>Deadlines will never surprise you again.</h4>
                      <p>
                        re here every step of the way making sure you and your
                        team deliver
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="second" className={`${styles.section} bg-dark`}>
            <div className="container pt-5 mt-5 pb-5 mb-5">
              <div className="row">
                <div className="col-12">
                  <div className="text-center mb-4 col-12 d-flex justify-content-center">
                    <h1 className="text-light col-6">
                      <b>Move work forward from anywhere</b>
                    </h1>
                  </div>
                  <div className={styles.featureImage}>
                    <Image src={dashboard} alt="dashboard" />
                  </div>
                  <div className="text-center col-12 d-flex justify-content-center mt-5">
                    <p className="text-light col-6">
                      re here every step of the way making sure you and your
                      team deliver. re here every step of the way making sure
                      you and your team deliver
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <div className="section-title-center pb-8">
                    <h2 className="mt-n3 mt-md-n4">Get free for 14 Days</h2>
                    <p>
                      Aenean amet netus aliquam elit eu, sagittis id natoque id.
                      Purus augue fermentum dui aliquam dui vel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <footer className={styles.footer}>
              Feito por Willian Mustafa
            </footer>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Layout;
