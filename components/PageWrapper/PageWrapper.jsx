import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const PageWrapper = ({ children, theme }) => {
  return (
    <div
      className={`min-h-screen max-w-7xl mx-auto qe-gradient-${theme} text-white`}
    >
      <Nav theme={theme} />
      {children}
      <Footer />
    </div>
  );
};

export default PageWrapper;
