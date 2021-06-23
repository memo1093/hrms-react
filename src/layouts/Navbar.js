import React, { useEffect, useState } from "react";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import {
  Button,
  Dropdown,
  Grid,
  Header,
  Icon,
  Input,
  Menu,
} from "semantic-ui-react";

export const Navbar = ({ location }) => {
  const [show, setShow] = useState(false);

  
  return (
    <Grid style={{ marginBottom: "3.5rem" }}>
      <Grid.Row>
        <Menu size="large" fixed="top" color="violet" fluid inverted>
          <Menu.Menu>
            <Grid.Column>
              <Grid>
                <Grid.Row only="tablet computer">
                  <Grid.Column>
                    <Menu.Item>
                      <Header as="h2" inverted>
                        <Icon name="globe" />
                        <Header.Content
                          as={NavLink}
                          to="/"
                          style={{ color: "white" }}
                        >
                          HRMS
                        </Header.Content>
                      </Header>
                    </Menu.Item>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            
            <Menu.Item as={NavLink} exact to="/">
              Ana Sayfa
            </Menu.Item>

            <Dropdown item text="Profil">
              <Dropdown.Menu>
                <Dropdown.Item>Özgeçmiş</Dropdown.Item>
                <Dropdown.Item>İş Alarmları</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        
          <Menu.Menu position="right">
            <Menu.Item
              as={NavLink}
              to="/addJobAdvertisement"
              content="İş ilanı ekle"
              position="right"
              icon="add"
            />

            <Menu.Item position="right">
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
                    <Input label="Email" icon="mail"></Input>
                  </Dropdown.Header>
                  <Dropdown.Header>
                    <Input
                      label="Şifre"
                      fluid
                      action={{
                        icon: show ? "eye" : "eye slash outline",
                        onClick: () => setShow(!show),
                      }}
                    ></Input>
                  </Dropdown.Header>
                  <Header as="h2">
                    <Button color="violet">Giriş yap</Button>
                  </Header>
                  <Dropdown.Divider />
                  <Dropdown.Header>
                    <a>Şifremi unuttum</a>
                  </Dropdown.Header>
                  <Dropdown.Header>
                    <a>Kaydol</a>
                  </Dropdown.Header>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Grid.Row>
    </Grid>
  );
};
