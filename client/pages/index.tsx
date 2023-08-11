import Main, { Props } from "../containers/Main";
import { data } from "../public/data/main";
import React from "react";
import { GetStaticProps } from "next";

const MainPage = ({ importData }: { importData: Props }) => {
  return <Main importData={importData} />;
};

export default MainPage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      importData: data,
    },
  };
};
