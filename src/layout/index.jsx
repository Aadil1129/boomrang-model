import React from "react";

import Top from "components/home/top";
function Layout(props) {
  return (
    <>
      <Top />
      {props.children}
    </>
  );
}

export default Layout;
