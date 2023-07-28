import Home from "@/components/Home";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "@/components/Layout";
function Header1() {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default Header1;
