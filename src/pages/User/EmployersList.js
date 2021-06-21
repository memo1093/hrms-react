import React, { useEffect, useState } from "react";
import { Button, Grid, Image, Table } from "semantic-ui-react";
import EmployerService from "../../services/EmployerService";
import EmployeeService from "../../services/EmployeeService";
import { useDispatch, useSelector } from "react-redux";
import {
  changeActivation,
  getAllEmployers,
} from "../../store/actions/employerActions";
import { toast, ToastContainer } from "react-toastify";

export const EmployersList = () => {
  //const [employers, setEmployers] = useState([]);
  const employers = useSelector((state) => state.employer.employers);

  const dispatch = useDispatch();

  const handleActivated = (employer) => {
    let employeeService = new EmployeeService();
    employeeService.changeActivation(employer.id);

    dispatch(changeActivation(employer));
    toast.info(
      `${employer.companyName}şirketinin aktivasyon durumu başarıyla güncellendi!`
    );
  };

  useEffect(() => {
    dispatch(getAllEmployers());
  }, []);

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
            {employers.map((employer) => (
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

      </Grid.Row>
    </Grid>
  );
};
