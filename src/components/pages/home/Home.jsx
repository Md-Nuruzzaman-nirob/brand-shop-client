import { useLoaderData } from "react-router-dom";
import NavBar from "../../common/NavBar";

const Home = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <div>
      <NavBar></NavBar>
      <div className="mx-auto max-w-screen-md py-12">
        <div className="relative mb-12 flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2717&amp;q=80"
          />
        </div>
        {user.map((data) => (
          <p key={data._id}>
            {" "}
            {data?.name} : {data?.email}
          </p>
        ))}
        <h2 className="mb-2 block font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
          What is Material Tailwind
        </h2>
        <p className="block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make
          the pizza look more delicious other agencies charge much lesser can
          you make the blue bluer?.
        </p>
      </div>
      <div className="mx-auto max-w-screen-md py-12">
        <div className="relative mb-12 flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2717&amp;q=80"
          />
        </div>
        <h2 className="mb-2 block font-Bebas line-clamp- text-4xl font- leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
          What is Material Tailwind
        </h2>
        <p className="block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make
          the pizza look more delicious other agencies charge much lesser can
          you make the blue bluer?.
        </p>
      </div>
      <div className="mx-auto max-w-screen-md py-12">
        <div className="relative mb-12 flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2717&amp;q=80"
          />
        </div>
        <h2 className="mb-2 block font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
          What is Material Tailwind
        </h2>
        <p className="block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make
          the pizza look more delicious other agencies charge much lesser can
          you make the blue bluer?.
        </p>
      </div>
      <div className="mx-auto max-w-screen-md py-12">
        <div className="relative mb-12 flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2717&amp;q=80"
          />
        </div>
        <h2 className="mb-2 block font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
          What is Material Tailwind
        </h2>
        <p className="block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make
          the pizza look more delicious other agencies charge much lesser can
          you make the blue bluer?.
        </p>
      </div>
    </div>
  );
};

export default Home;
