import React, { useEffect, useState} from "react";
import { Button, Grid, Image, Table } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import {
  
  changeActivation,
  getAllEmployers,
} from "../../store/actions/employerActions";
import { Paginate } from "../../layouts/Paginate";

export const EmployersList = () => {

  const [page, setPage] = useState(1)
  const [pageSize, setpageSize] = useState(10)
    
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllEmployers(page,pageSize));
  }, [dispatch, page, pageSize]);
  
  const employers = useSelector((state) => state.employers);
  
  const handleActivated = (employer) => {
    dispatch(changeActivation(employer));
  };

  return (
    <Grid>
        {employers.loading?(<Image centered src="./img/loading.gif"/>):
      <Grid.Row centered color="violet">
        <Table stackable selectable padded inverted color="violet">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center"></Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Şirket adı</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Şirketin web adresi
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Telefon numarası
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Email adresi
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Onay durumu
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center">İşlemler</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {employers.employers.content.map((employer) => (
              <Table.Row key={employer.id} negative={employer.activated?false:true}>
                <Table.Cell textAlign="center" singleLine>
                  {employer.companyPicture ? (
                    <Image src={employer.companyPicture} avatar />
                    ) : (
                      ""
                      )}
                </Table.Cell>
                <Table.Cell textAlign="center" singleLine>
                  {employer.companyName}
                </Table.Cell>
                <Table.Cell textAlign="center" singleLine>
                  {employer.webAddress}
                </Table.Cell>
                <Table.Cell textAlign="center" singleLine>
                  +09 {employer.phoneNumber}
                </Table.Cell>
                <Table.Cell textAlign="center" singleLine>
                  {employer.email}
                </Table.Cell>
                <Table.Cell textAlign="center" singleLine>
                  {employer.activated ? "Onaylandı" : "Onay bekliyor"}
                </Table.Cell>
                <Table.Cell textAlign="center" singleLine>
                  {
                    <Button color={employer.activated?"green":"red"} onClick={() => handleActivated(employer)}>
                      {employer.activated ? "Onaylandı" : "Onay Bekleniyor"}
                    </Button>
                  }
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
          <Paginate
          inverted
          page={page}
          setPage={setPage}
          setpageSize={setpageSize}
          totalPages={employers.employers.totalPages}
          
          />
        
        </Grid.Row>
        }
    </Grid>
  );
};
