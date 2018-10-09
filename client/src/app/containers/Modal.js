import React from 'react';
import { ModalBox, ModalContent } from 'app/components/Modal';

const createModal = (Body, Footer) =>
  class extends React.PureComponent {
    render() {
      return (
        <ModalBox>
          <ModalContent>
            <Body {...this.props} />
            <div className="Modal-react-body">{this.props.children}</div>
            <div className="Modal-react-footer">
              <Footer {...this.props} />
            </div>
          </ModalContent>
        </ModalBox>
      );
    }
  };

export default createModal;
