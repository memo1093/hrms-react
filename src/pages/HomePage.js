import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Grid,
  Header,
  Image,
  Reveal,
} from "semantic-ui-react";


export const HomePage = () => {
  return (
    <Grid centered padded>
        <Grid.Row centered color="violet">
      <Card.Group itemsPerRow={3} stackable centered>
        <Card color="red" style={{ backgroundColor: "#f94144" }}>
          <Link to="/jobAdvertisements">
            <Reveal animated="fade">
              <Reveal.Content visible>
                <Image style={{opacity:"0.3"}}
                  src="/img/gray-solid-color-background.jpg"
                  size="huge"
                  
                />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image
                  src="/img/is-bul.jpg"
                  size="huge"
                  
                />
                
                <Card.Header>
                  {" "}
                  <Header inverted  >
                    İş Ara
                    
                    <Header.Subheader>
                      Tüm ilanları görmek için tıklayın...
                    </Header.Subheader>
                   
                  </Header>
                </Card.Header>
              </Reveal.Content>
            </Reveal>
          </Link>
        </Card>
        <Card style={{ backgroundColor: "#f3722c" }}>
          <Link to="/employers">
            <Reveal animated="fade">
              <Reveal.Content visible>
                <Image style={{opacity:"0.3"}}
                  src="/img/gray-solid-color-background.jpg"
                  size="huge"
                />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image
                  src='/img/sirketler.jpg'
                  size="massive"
                />
                <Card.Header>
                  {" "}
                  <Header inverted  >
                    Şirketler
                    <Header.Subheader>
                      Kayıtlı tüm şirketleri görmek için tıklayın...
                    </Header.Subheader>
                  </Header>
                </Card.Header>
              </Reveal.Content>
            </Reveal>
          </Link>
        </Card>
        <Card style={{ backgroundColor: "#f8961e" }}>
          <Link to="/candidates">
            <Reveal animated="fade">
              <Reveal.Content visible>
                <Image style={{opacity:"0.3"}}
                  src="/img/gray-solid-color-background.jpg"
                  size="huge"
                />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image
                  src='/img/eleman.jpg'
                  size="huge"
                />
                <Card.Header>
                  {" "}
                  <Header inverted>
                    Eleman
                    <Header.Subheader>
                      Tüm elemanları görmek için tıklayın...
                    </Header.Subheader>
                  </Header>
                </Card.Header>
              </Reveal.Content>
            </Reveal>
          </Link>
        </Card>
        
        
      </Card.Group>
      </Grid.Row>
    </Grid>
  );
};
