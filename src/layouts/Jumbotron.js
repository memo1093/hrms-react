import React from "react";
import { useLocation } from "react-router-dom";
import { Grid, Header, Icon, Image, Input } from "semantic-ui-react";
import { SearchBar } from "./SearchBar";

export const Jumbotron = ({location}) => {
  
  return (
    <div style={{ margin: "5rem" }}>
      <Header as="h2" icon textAlign="center">
        <Icon name="globe" color="violet" circular />
        <Header.Content>HRMS</Header.Content>
        <Header.Subheader>İnsan kaynakları yönetim sistemi</Header.Subheader>
        <Header.Subheader>Yeni iş arama portalınız</Header.Subheader>
      </Header>
      <Image
        centered
        size="large"
        src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png"
      />
      {
        location==="/jobAdvertisements"&&<SearchBar placeholder="İş Ara..."/>
      }
      {
        location==="/"&&<SearchBar placeholder="İş Ara..."/>
      }
      
    </div>
  );
};
