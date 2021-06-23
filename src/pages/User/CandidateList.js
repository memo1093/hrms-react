import React, { useEffect, useState } from 'react'
import { Grid, Image, Table } from 'semantic-ui-react'
import CandidateService from '../../services/CandidateService'

export const CandidateList = () => {
    const [candidates, setCandidates] = useState([])
    
    useEffect(() => {
        let candidateService = new CandidateService()
        candidateService.getAll().then(result=>setCandidates(result.data.data))
    }, [])
   
    return (
        <Grid>
         
        <Grid.Row centered color="violet">
          <Table stackable selectable padded inverted color="violet">

            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center" content="Profil Resmi"/>
                <Table.HeaderCell textAlign="center" content="Ad"/>
                <Table.HeaderCell textAlign="center" content="Soyad"/>
                <Table.HeaderCell textAlign="center" content="Doğum Tarihi"/>
              </Table.Row>
            </Table.Header>
  
            <Table.Body>
              {candidates.map(candidate => (
                <Table.Row key={candidate.id} >
                  <Table.Cell textAlign="center" singleLine>
                    {candidate.profilePicture?(<Image src={candidate.profilePicture} avatar centered/>):""}
                  
                  </Table.Cell>
                  <Table.Cell textAlign="center" content={candidate.firstName} singleLine/>
                  <Table.Cell textAlign="center" content={candidate.lastName} singleLine/>
                  <Table.Cell textAlign="center" content={candidate.birthDate} singleLine/>
                 
                  
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Grid.Row>
      </Grid>
    )
}
