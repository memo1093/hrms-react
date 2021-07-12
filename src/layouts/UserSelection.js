import React from "react";
import { Dropdown, Grid } from "semantic-ui-react";

export const UserSelection = ({ setSelection }) => {
  const userOptions = [
    { key: "1", text: "İş Arayan", value: 1 },
    { key: "2", text: "İşveren", value: 2 },
  ];
  return (
    <Grid padded>
      <Grid.Row centered>
        <Grid.Column textAlign="center">
          <Dropdown
            options={userOptions}
            placeholder="Kayıt tipini seçin"
            className="icon"
            icon="globe"
            onChange={(e,{value}) => setSelection({value}.value)}
            
            labeled
            button
            selection
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
