import React, { FormEvent, useState } from "react";
import styles from "./UserAccountInfo.module.css";
import Card from "../UI/card/Card";
import FormInput from "../UI/FormInput/FormInput";
import FormLabel from "../UI/FormLabel/FormLabel";
import profile from "@/assets/images/profile-full.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/button/Button";
import FormUploader from "../UI/FormUploader/FormUploader";
import { useSelector } from "react-redux";
import { selectUserState } from "@/store/user.slice";
import { auth } from "@/firebase/authentication";
import { toast } from "react-toastify";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";

export default function UserAccountInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const currentUser = useSelector(selectUserState);
  const [name, setName] = useState(currentUser?.displayName);
  const [email] = useState(currentUser?.email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const updateInfo = (event: FormEvent) => {
    event.preventDefault();
    console.log(name, currentUser);
    if (name && currentUser) {
      auth
        .updateProfile(currentUser, name)
        .then(() => toast.success("Usuário atualizado!"))
        .catch(() => toast.error("Houve um erro =("));
    }
  };

  const updatePassword = (event: FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) toast.error("As senhas estão diferentes");
    else if (currentUser) {
      auth
        .updatePassword(currentUser, password)
        .then(() => toast.success("Senha alterada!"));
    }
  };

  return (
    <>
      <Card title="Dados da Conta">
        <form onSubmit={(e) => updateInfo(e)}>
          <div className="row mt-3">
            <div className="col-6">
              <div className="mb-3">
                <FormLabel htmlFor="name">Nome</FormLabel>
                <FormInput
                  name="name"
                  placeholder="Taylor Swift"
                  value={name ?? ""}
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                />
              </div>
              <div className="mb-3">
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  name="email"
                  variation="transparent"
                  placeholder="taylor@swift.com"
                  value={email ?? ""}
                  disabled
                />
              </div>
              <Button type="submit" variant="success">
                Salvar Alterações
              </Button>
            </div>
            <div className="col-6">
              <div className={styles.imgWrapper}>
                <div className={styles.imgOutter}>
                  <ProfileAvatar imageUrl={profileImage} />
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
        </form>
      </Card>
      <Card title="Mudar a Senha" className="mt-3">
        <form onSubmit={(e) => updatePassword(e)}>
          <div className="row mt-3">
            <div className="col-6">
              <div className="mb-3">
                <FormLabel htmlFor="email">Nova Senha</FormLabel>
                <FormInput
                  name="password"
                  type="password"
                  variation="transparent"
                  placeholder="********"
                  value={password}
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                />
              </div>
              <div className="mb-3">
                <FormLabel htmlFor="email">Repetir Nova Senha</FormLabel>
                <FormInput
                  name="confirmPassword"
                  type="password"
                  variation="transparent"
                  placeholder="********"
                  value={confirmPassword}
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setConfirmPassword(e.target.value)
                  }
                />
              </div>
              <Button type="submit" variant="success">
                Salvar Alterações
              </Button>
            </div>
          </div>
        </form>
      </Card>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Teste">
        <FormUploader accept="image/png, image/jpeg" />
      </Modal>
    </>
  );
}
