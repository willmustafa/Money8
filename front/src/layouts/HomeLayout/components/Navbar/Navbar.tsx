import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Button from "@/layouts/core/components/UI/button/Button";
import Login from "@/layouts/core/components/Login/Login";
import Modal from "@/layouts/core/components/UI/Modal/Modal";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      <nav
        className={`navbar position-fixed navbar-expand-md ${
          scroll ? "bg-light" : ""
        }`}
      >
        <div className="container">
          <Link href="/" passHref className="navbar-brand">
            <img src="/logo.png" alt="Logo" height={30} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="#home" className="nav-link" scroll={false}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#about" className="nav-link" scroll={false}>
                  Sobre
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#contact" className="nav-link" scroll={false}>
                  Contato
                </Link>
              </li>
              <Button
                className="ms-2"
                variant="light"
                outline
                onClick={toggleLogin}
              >
                Entrar / Cadastrar
              </Button>
            </ul>
          </div>
        </div>
      </nav>
      {showLogin && (
        <Modal isOpen={showLogin} setIsOpen={setShowLogin} size="xl" fullSize>
          <Login />
        </Modal>
      )}
    </>
  );
}
