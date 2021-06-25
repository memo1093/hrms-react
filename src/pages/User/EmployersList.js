import React, { useEffect, useState} from "react";
import { Button, Grid, Image, Pagination, Table } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeActivation,
  getAllEmployers,
} from "../../store/actions/employerActions";
import { toast } from "react-toastify";

export const EmployersList = () => {

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllEmployers(page));
  }, [page]);
  
  const employers = useSelector((state) => state.employers);
  
  const handleActivated = (employer) => {
    dispatch(changeActivation(employer));
    toast.info(
      `${employer.companyName} şirketinin aktivasyon durumu başarıyla güncellendi!`
    );
  };

  return (
    <Grid>
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
            {employers.loading?(<Image src="./img/loading.gif"/>):employers.employers.content.map((employer) => (
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
             <Pagination defaultActivePage={page} onPageChange={(e,{activePage})=>setPage(activePage)} totalPages={totalPages} secondary inverted/>

      </Grid.Row>
    </Grid>
  );
};
