import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
                <Table.HeaderCell textAlign="center">Profil Resmi </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Ad</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Soyad</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                 Doğum tarihi
                </Table.HeaderCell>
                
              </Table.Row>
            </Table.Header>
  
            <Table.Body>
              {candidates.map(candidate => (
                <Table.Row key={candidate.id} >
                  <Table.Cell textAlign="center" singleLine>
                    {candidate.profilePicture?(<Image src={candidate.profilePicture} avatar size="tiny"  centered/>):""}
                  </Table.Cell>
                  <Table.Cell textAlign="center" singleLine>
                    {candidate.firstName}
                  </Table.Cell>
                  <Table.Cell textAlign="center" singleLine>
                    {candidate.lastName}
                  </Table.Cell>
                  <Table.Cell textAlign="center" singleLine>
                    {candidate.birthDate}
                  </Table.Cell>
                  
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Grid.Row>
      </Grid>
    )
}
