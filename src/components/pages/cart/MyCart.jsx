import { useLoaderData } from "react-router-dom";
import NavBar from "../../common/NavBar";

const MyCart = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <NavBar></NavBar>
      <div>
        <h1>my cart</h1>
      </div>
    </>
  );
};

export default MyCart;
