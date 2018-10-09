import styled from 'styled-components';
import * as React from 'react';
import { Image } from 'app/components/Image';
import Form from 'app/containers/Form';
import Button from '@material-ui/core/Button/Button';

export const ModalBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 1;
  overflow-x: hidden;
  overflow-y: auto;
  animation: show 0.5s ease;
`;

export const ModalContent = styled.div`
  width: 40%;
  margin: 0 auto;
  padding: 25px;
  background: #fff;
  border-radius: 3px;
`;

export class ModalBody extends React.PureComponent {
  render() {
    const { image, onSubmit } = this.props;
    return (
      <React.Fragment>
        <Image image={image} />
        <div>Title: {image.title}</div>
        <div>Date: {image.date}</div>
        <div>Description: {image.description}</div>
        <Form initialValues={image} onSubmit={onSubmit} />
      </React.Fragment>
    );
  }
}

export class ModalFooter extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Button
          type="button"
          onClick={() => {
            this.props.close();
          }}
        >
          Close
        </Button>
      </React.Fragment>
    );
  }
}
