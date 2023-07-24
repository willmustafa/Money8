import { app } from "./firebase";
import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  User,
  updateProfile,
  updatePassword
} from "firebase/auth";
import Api from "@/utils/apiCalls";
import { toast } from "react-toastify";

export default class Auth {
  constructor() {}

  auth = getAuth(app);

  async updatePassword(user: User, password: string) {
    return updatePassword(user, password)
  }

  async updateProfile(user: User, displayName: string): Promise<void> {
    return updateProfile(user, {
      displayName,
    });
  }

  async signInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<User> {
    let user = {} as User;
    await signInWithEmailAndPassword(this.auth, email, password)
      .then(async (res) => {
        toast("Usuário logado com Sucesso!");
        user = res.user;
      })
      .catch((err) => {
        toast.error(`Ocorreu um erro: ${err.message}`);
        return err;
      });

    return user;
  }

  async registerWithEmailAndPassword(
    email: string,
    password: string,
    displayName: string
  ) {
    try {
      const res = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      )
        .then((res) => {
          toast("Usuário Criado com Sucesso!");
          this.updateProfile(res.user, displayName);

          const user = {
            ...res.user,
            displayName,
          };
          return user;
        })
        .catch((err) => {
          toast(`Ocorreu um erro: ${err}`);
          return err;
        });
      const user = res.user;

      await Api.post("user", {
        email,
        fullName: user.uid,
        password,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async resetPassword(email: string) {
    try {
      await sendPasswordResetEmail(this.auth, email);
    } catch (error) {
      console.error(error);
    }
  }

  async logout(): Promise<void> {
    return await signOut(this.auth);
  }
}

const auth = new Auth()
export {auth}