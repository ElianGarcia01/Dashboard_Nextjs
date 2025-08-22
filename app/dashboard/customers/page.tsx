import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
};

const customers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <h1>El Contenido del Customers...</h1>;
};

export default customers;
