import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Grid, Table } from 'semantic-ui-react'
import { Paginate } from '../../layouts/Paginate'
import { getAllUsers, setRoleToUser } from '../../store/actions/employeeActions'

export const UserList = () => {
    const [page, setPage] = useState(1)
    const [pageSize, setpageSize] = useState(10)
    const dispatch = useDispatch()
    const users = useSelector(state => state.employees)
    useEffect(() => {
        dispatch(getAllUsers(page,pageSize))
    }, [dispatch,page,pageSize])
    
    const handleSetRole=(userId,roleName)=>{
      dispatch(setRoleToUser(userId,roleName))
    }
   
    return(
        <Grid>
      
      <Grid.Row centered color="violet">
        <Table stackable selectable padded inverted color="violet">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center">Email</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Rol</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Rol Ata/Değiştir</Table.HeaderCell>
              
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
             users.users.content?.map((user) => (
                <Table.Row key={user.id}>
                  
                  <Table.Cell textAlign="center" singleLine>
                    {user.email}
                  </Table.Cell>
                  <Table.Cell textAlign="center" singleLine>
                    {user.role===null?"Rol atanmamış":(user.role.name==='Candidate'?'İş arayan':(user.role.name==='Emloyer'?"İş veren":"Sistem Çalışanı"))}
                  </Table.Cell>
                  <Table.Cell textAlign="center" singleLine>

                      <Button.Group>
          {user.role?.name!=='Employee'&&<Button  color="red" content="Sistem Çalışanı" onClick={()=>handleSetRole(user.id,'Employee')}/>}
          {user.role?.name!=='Employer'&&<Button  color="blue" content="İşveren" onClick={()=>handleSetRole(user.id,'Employer')}/>}
          {user.role?.name!=='Candidate'&&<Button  color="yellow" content="İş arayan" onClick={()=>handleSetRole(user.id,'Candidate')}/>}


                    
                    
                      </Button.Group>
                  </Table.Cell>
                </Table.Row>
              ))
            }
          </Table.Body>
          </Table>
        <Paginate
        page={page}
        setPage={setPage}
        setpageSize={setpageSize}
        totalPages={users?.users.totalPages}
        inverted
        />
        
      </Grid.Row>
      
    </Grid>)
   
        
    
}
