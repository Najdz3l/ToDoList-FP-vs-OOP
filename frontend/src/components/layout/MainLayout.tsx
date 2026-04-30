import type React from "react";
import { Footer } from "@components/layout/Footer";
import { Header } from "@components/layout/Header";
import { Navbar } from "@components/layout/Navbar";
import { Table } from "@components/table/Table";

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Table />
      <Footer />
    </>
  );
};
