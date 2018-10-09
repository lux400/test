import styled from 'styled-components';
import * as React from 'react';

export const ImagesBox = styled.div`
  cursor: pointer;
  padding: 0.5vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-flow: row wrap;
  > div {
    flex: auto;
    width: 200px;
    margin: 0.5vw;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const ImageBox = styled.div`
  text-align: center;
  img {
    width: 100%;
    height: auto;
  }
`;

export const Info = styled.div`
  text-align: left;
`;

export class Image extends React.PureComponent {
  render() {
    const { image, children, ...props } = this.props;
    return (
      <React.Fragment>
        <ImageBox>
          <img src={image.url} alt={image.title} {...props} />
          {children}
        </ImageBox>
      </React.Fragment>
    );
  }
}
