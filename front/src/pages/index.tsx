import { useUser } from "@auth0/nextjs-auth0/client";
import HomeLayout from 'src/layouts/HomeLayout/HomeLayout'

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
      {user && (
        <div>
          <img src={user.picture} alt={user.name} />
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