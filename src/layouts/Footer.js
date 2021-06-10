import React from "react";
import { Divider, Grid, Segment } from "semantic-ui-react";

export const Footer = () => {
  return (
    <Segment>
      <Grid columns={2} relaxed="very">
        <Grid.Column>
          <p>Bize ulaşın...</p>
          <p>GSM :(555) 555 55 55</p>
        </Grid.Column>
        <Grid.Column>
          <p>Bu bir kodlamaio projesidir.</p>
          <p>Tüm hakları kodlamaio ekibine</p> 
        </Grid.Column>
      </Grid>
      <Divider vertical>&</Divider>
    </Segment>
  );
};
