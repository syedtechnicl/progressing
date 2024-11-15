import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Reduxx/store";

const Nav = () => {
  const len_gth = useSelector((state: RootState) => state.NewOne_Learning);
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
    margin: "0 10px",
    fontWeight: "bold",
    fontSize: "16px",
  };

  const logoStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>Syed Technical</div>
      <div>
        <Link href="/" style={linkStyle}>
          Home
        </Link>

        <Link href={"#"} style={linkStyle}>
          Cart Item {len_gth.length}
        </Link>
        <Link href="/Cards" style={linkStyle}>
          Card
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
