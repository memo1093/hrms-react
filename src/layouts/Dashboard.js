import React from "react";
import { Segment } from "semantic-ui-react";
import { Footer } from "./Footer";
import { Jumbotron } from "./Jumbotron";
import { Navbar } from "./Navbar";

export const Dashboard = ({ children }) => {
  return (
    <>
     
        <Navbar />
        <Jumbotron />
      
      {children}
      <Segment><Footer/></Segment>
    </>
  );
};
