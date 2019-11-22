import React, { FC } from "react";
import { Header } from "tabler-react";
import { SiteWrapper } from "../../layout/SiteWrapper";

const DashboardPage: FC = () => {
  return (
    <SiteWrapper>
      <Header.H1>Dashboard</Header.H1>
    </SiteWrapper>
  );
};

export default DashboardPage;
