import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImageActions from 'app/actions/images';
import createModal from 'app/containers/Modal';
import { Image, ImagesBox, Info } from 'app/components/Image';
import Title from 'app/components/Title';
import { ModalBody, ModalFooter } from 'app/components/Modal';

const Modal = createModal(ModalBody, ModalFooter);

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageId: null,
    };
  }

  componentDidMount() {
    this.props.actions.loadImages();
  }

  toggleDialog = (id) => {
    this.setState({ imageId: id });
  };

  findImage = (id) => this.props.images.find((image) => image.id === id);

  updateImage = (image) => {
    this.props.actions.updateImage(image, image.id);
    this.setState({ imageId: null });
  };

  render() {
    const { images } = this.props;
    const { imageId } = this.state;
    const selectedImage = imageId ? this.findImage(imageId) : null;
    return (
      <React.Fragment>
        <Title>Image gallery</Title>
        <ImagesBox>
          {images.map((image) => (
            <Image
              key={image.id}
              image={image}
              onClick={() => {
                this.toggleDialog(image.id);
              }}
            >
              <Info>
                {image.title}, {image.date}
              </Info>
              <Info>Rate: {image.rate}</Info>
            </Image>
          ))}
        </ImagesBox>

        {imageId ? (
          <Modal image={selectedImage} onSubmit={this.updateImage} close={this.toggleDialog} />
        ) : null}
      </React.Fragment>
    );
  }
}
export default connect(
  (state) => ({
    images: state.images.data,
    loading: state.images.loading,
  }),
  (dispatch) => ({
    actions: bindActionCreators(ImageActions, dispatch),
  }),
)(Images);
