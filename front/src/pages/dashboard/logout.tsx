import Auth from "@/firebase/authentication";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    async function logout() {
      await new Auth()
        .logout()
        .catch((err) => toast.error(err));
    }

    logout().then((res) => {
      console.log(res);
      router.push("/");
      toast("Você deslogou com sucesso!");
    });
  }, []);

  return (
    <div>Saindo...</div>
  );
}
