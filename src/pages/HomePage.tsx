import React, { FC } from "react";
import { Header } from "tabler-react";
import SiteWrapper from "../layout/SiteWrapper";

const HomePage: FC = () => {
  return (
    <SiteWrapper>
      <Header.H1>Home Page</Header.H1>
    </SiteWrapper>
  );
};

export default HomePage;
