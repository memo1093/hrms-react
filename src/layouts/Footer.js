import React from "react";
import { Divider, Grid, Segment } from "semantic-ui-react";

export const Footer = () => {
  return (
    <Segment stacked style={{marginTop:"9vh"}}>
      <Grid columns={2} relaxed="very">
        <Grid.Column>
          <p>Bize ulaşın...</p>
          <p>GSM :(555) 555 55 55</p>
        </Grid.Column>
        <Grid.Column>
          <p>Bu bir kodlamaio projesidir.</p>
          <p>Tüm hakları kodlamaio ekibine aittir</p> 
        </Grid.Column>
      </Grid>
      <Divider vertical>&</Divider>
    </Segment>
  );
};
