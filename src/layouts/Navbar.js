import { createMedia } from "@artsy/fresnel";
import React, { useState } from "react";
import {
  Button,
  Dropdown,
  Grid,
  GridColumn,
  Header,
  Icon,
  Input,
  Menu,
  Segment,
} from "semantic-ui-react";



export const Navbar = () => {
  
  const [show, setShow] = useState(false)


  return (
    <Grid>
      <Grid.Row>
        <Menu size="large" fixed="top" color="violet" fluid borderless inverted>
          <Grid.Column>
            <Grid>
              <Grid.Row only="tablet computer">
                <Grid.Column>
                  <Menu.Item>
                    <Header as="h2" inverted>
                      <Icon name="globe" />
                      <Header.Content>HRMS</Header.Content>
                    </Header>
                  </Menu.Item>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          
            <Menu.Item active>Ana Sayfa</Menu.Item>
            
            <Dropdown item text="Profil">
              <Dropdown.Menu>
                <Dropdown.Item>Özgeçmiş</Dropdown.Item>
                <Dropdown.Item>İş Alarmları</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
         

          <Menu.Menu position="right">
            <Grid.Column>
              <Menu.Item>
                <Dropdown
                  icon="user"
                  floating
                  labeled
                  button
                  simple
                  className="icon"
                  text="Giriş yap"
                >
                  <Dropdown.Menu>
                    <Dropdown.Header>
                      <Input
                        label="Email"
                        icon="mail"
                      ></Input>
                    </Dropdown.Header>
                    <Dropdown.Header>
                      <Input label="Şifre" fluid
                        action={{icon:show?"eye":"eye slash outline",onClick:()=>setShow(!show)}}
                      ></Input>
                      
                    </Dropdown.Header>
                    <Header as="h2">
                      <Button color="violet">Giriş yap</Button>
                    </Header>
                    <Dropdown.Divider />
                    <Dropdown.Header>
                      <a href="#">Şifremi unuttum</a>
                    </Dropdown.Header>
                    <Dropdown.Header>
                      <a href="#">Kaydol</a>
                    </Dropdown.Header>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
            </Grid.Column>
          </Menu.Menu>
        </Menu>
      </Grid.Row>
    </Grid>
  );
};
