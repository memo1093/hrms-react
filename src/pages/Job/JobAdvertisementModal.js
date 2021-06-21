import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Header, Image, Modal } from "semantic-ui-react";

export const JobAdvertisementModal = ({ jobAdvertisement }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const application = () => {
    setModalOpen(false);
    toast.info(
      `${jobAdvertisement.jobPosition?.position} pozisyonuna başvuru işlemi başarılı`
    );
  };
  return (
    <Modal
      onClose={() => setModalOpen(false)}
      open={modalOpen}
      trigger={<Button onClick={() => setModalOpen(true)}>İncele</Button>}
    >
      <Modal.Header>
        {jobAdvertisement.employer.companyName}{" "}
        <Button
          color="grey"
          size="small"
          icon="times"
          floated="right"
          onClick={() => setModalOpen(false)}
        ></Button>
      </Modal.Header>

      <Modal.Content
        image={jobAdvertisement.employer.companyPicture ? true : false}
      >
        <Image
          size="tiny"
          src={jobAdvertisement.employer.companyPicture}
          wrapped
        />{" "}
        <Modal.Description>
          <Header>{jobAdvertisement.jobPosition.position}</Header>
          <p>{jobAdvertisement.description}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Header floated="left" size="small">
          <Header.Content>
            <div>Son Başvuru Tarihi</div>{" "}
            <div> {jobAdvertisement.lastApplicationDate}</div>
          </Header.Content>
        </Header>
        <Button
          color="red"
          icon="close"
          labelPosition="right"
          content="Kapat"
          onClick={() => setModalOpen(false)}
        ></Button>
        <Button
          content="Başvur"
          labelPosition="right"
          icon="checkmark"
          onClick={() => application()}
          color="violet"
        />
      </Modal.Actions>
    </Modal>
  );
};
