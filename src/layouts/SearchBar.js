import React from 'react'
import { Grid, Input } from 'semantic-ui-react'

export const SearchBar = ({placeholder}) => {
    return (
        <Grid padded>
        <Grid.Row centered>
          <Grid.Column widescreen={8} tablet={16} mobile={16}>
            <Input
              size="large"
              action={{ color: "violet", icon: "search" }}
              placeholder={placeholder}
              fluid
            ></Input>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}
