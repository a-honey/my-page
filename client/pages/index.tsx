import Main, { DataProps } from "@/containers/Main";
import { InferGetServerSidePropsType, GetStaticProps } from "next";
import React from "react";
import path from "path";

type Props = {
  data: DataProps[];
};

const MainPage = async ({
  data,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  console.log(data);
  const filePath = path.join(process.cwd(), "data", "main.json");
  const res = await fetch(filePath);
  console.log(filePath);
  console.log(res.json());
  return <Main data={data} />;
};

export default MainPage;

export const getStaticProps: GetStaticProps<{
  data: DataProps;
}> = async () => {
  console.log("dd");
  const filePath = path.join(process.cwd(), "data", "main.json");
  console.log("ddd");
  try {
    console.log("d");
    const res = await fetch(filePath);
    console.log(res.status);
    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const data = await res.json();

    if (!data) {
      return { notFound: true };
    }

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};
