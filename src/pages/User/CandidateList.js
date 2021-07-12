import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Image, Table } from "semantic-ui-react";
import { Paginate } from "../../layouts/Paginate";

import { getAllCandidates } from "../../store/actions/candidateActions";

export const CandidateList = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setpageSize] = useState(10);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCandidates(page, pageSize));
  }, [dispatch,page, pageSize]);

  const candidates = useSelector((state) => state.candidates);

  return (
    <Grid>
        {candidates.loading ? (
          <Image centered src="./img/loading.gif" />
        ) : (
      <Grid.Row centered color="violet">
          <Table stackable selectable padded inverted color="violet">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center" content="Profil Resmi" />
                <Table.HeaderCell textAlign="center" content="Ad" />
                <Table.HeaderCell textAlign="center" content="Soyad" />
                <Table.HeaderCell textAlign="center" content="Doğum Tarihi" />
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {candidates.candidates.content.map((candidate) => (
                <Table.Row key={candidate.id}>
                  <Table.Cell textAlign="center" singleLine>
                    {candidate.profilePicture ? (
                      <Image src={candidate.profilePicture} avatar centered />
                    ) : (
                      ""
                    )}
                  </Table.Cell>
                  <Table.Cell
                    textAlign="center"
                    content={candidate.firstName}
                    singleLine
                  />
                  <Table.Cell
                    textAlign="center"
                    content={candidate.lastName}
                    singleLine
                  />
                  <Table.Cell
                    textAlign="center"
                    content={candidate.birthDate}
                    singleLine
                  />
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        <Paginate
        inverted
          page={page}
          setPage={setPage}
          setpageSize={setpageSize}
          totalPages={candidates.candidates.totalPages}
          />
      </Grid.Row>
          )}
    </Grid>
  );
};
