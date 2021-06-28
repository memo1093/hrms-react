import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Image, Table } from "semantic-ui-react";
import { Paginate } from "../../layouts/Paginate";
import { getAllEmployees } from "../../store/actions/employeeActions";

export const EmployeeList = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setpageSize] = useState(10);
  
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);
  useEffect(() => {
    dispatch(getAllEmployees(page,pageSize));
  }, [dispatch, page, pageSize]);

  return (
    <Grid>
      {employees.loading ? (
              <Image src="./img/loading.gif" />
            ) :( 
      <Grid.Row centered color="violet">
        <Table stackable selectable padded inverted color="violet">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center">Ad</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Soyad</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Email adresi
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              employees.employees.content.map((employee) => (
                <Table.Row key={employee.id}>
                  <Table.Cell textAlign="center" singleLine>
                    {employee.firstName}
                  </Table.Cell>
                  <Table.Cell textAlign="center" singleLine>
                    {employee.lastName}
                  </Table.Cell>
                  <Table.Cell textAlign="center" singleLine>
                    {employee.email}
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
        totalPages={employees.employees.totalPages}
        
        />
        
      </Grid.Row>
      )}
    </Grid>
  );
};
