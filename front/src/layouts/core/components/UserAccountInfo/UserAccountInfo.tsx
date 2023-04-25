import React, { useState } from "react";
import styles from "./UserAccountInfo.module.css";
import Card from "../UI/card/Card";
import FormInput from "../UI/FormInput/FormInput";
import FormLabel from "../UI/FormLabel/FormLabel";
import profile from "@/assets/images/profile-full.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/button/Button";
import FormUploader from "../UI/FormUploader/FormUploader";

export default function UserAccountInfo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card title="Dados da Conta">
        <div className="row mt-3">
          <div className="col-6">
            <div className="mb-3">
              <FormLabel htmlFor="name">Nome</FormLabel>
              <FormInput name="name" placeholder="Taylor Swift" />
            </div>
            <div className="mb-3">
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                name="email"
                variation="transparent"
                placeholder="taylor@swift.com"
                disabled
              />
            </div>
            <div className="mb-3">
              <FormLabel htmlFor="email">Nova Senha</FormLabel>
              <FormInput
                name="email"
                variation="transparent"
                placeholder="taylor@swift.com"
              />
            </div>
            <div className="mb-3">
              <FormLabel htmlFor="email">Repetir Nova Senha</FormLabel>
              <FormInput
                name="email"
                variation="transparent"
                placeholder="taylor@swift.com"
              />
            </div>
            <Button variant="success">Salvar Alterações</Button>
          </div>
          <div className="col-6">
            <div className={styles.imgWrapper}>
              <div className={styles.imgOutter}>
                <div
                  className={styles.imgInner}
                  style={{ backgroundImage: `url(${profile.src})` }}
                ></div>
                <div
                  className={styles.editIcon}
                  onClick={() => setIsOpen(true)}
                >
                  <FontAwesomeIcon icon={["fas", "pen"]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Teste">
          <FormUploader accept="image/png, image/jpeg" />
        </Modal>
    </>
  );
}
