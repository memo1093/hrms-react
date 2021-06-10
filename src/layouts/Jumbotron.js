import React from 'react'
import { Grid, Header, Icon, Image, Input } from 'semantic-ui-react'

export const Jumbotron = () => {
    return (
        <div style={{margin:"5rem"}}>
            
    
    
        
    <Header as='h2' icon textAlign='center'>
      <Icon name='globe' color="violet" circular />
      <Header.Content>HRMS</Header.Content>
      <Header.Subheader>İnsan kaynakları yönetim sistemi</Header.Subheader>
      <Header.Subheader>Yeni iş arama portalınız</Header.Subheader>
    </Header>
    <Image
      centered
      size='large'
      src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png'
    />
    <Grid padded>
      <Grid.Row centered>

      <Grid.Column widescreen={8} tablet={16} mobile={16}>

      <Input size="large" action={{color:"violet",icon:"search"}} placeholder="İş Ara..." fluid></Input>
      </Grid.Column>
      </Grid.Row>

    </Grid>
    

       
            
       
  
        </div>
    )
}
