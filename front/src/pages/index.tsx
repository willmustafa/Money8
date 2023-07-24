import { ToastContainer } from "react-toastify";
import HomeLayout from 'src/layouts/HomeLayout/HomeLayout'
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (<></>
  );
}

Home.getLayout = function(page: any) {
  return <HomeLayout>
    {page}
    <ToastContainer />
    </HomeLayout>
}