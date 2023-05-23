import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import HomeLayout from 'src/layouts/HomeLayout/HomeLayout'

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      <Link href="/api/auth/login">Login</Link>
      <Link href="/api/auth/logout">Logout</Link>
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{JSON.stringify(user)}</p>
        </div>
      )}
    </div>
  );
}

Home.getLayout = function(page: any) {
  return <HomeLayout>{page}</HomeLayout>
}