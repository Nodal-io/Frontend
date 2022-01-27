import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

function getInactiveServerWidth(screenWidth) {
  var cardWidth = screenWidth / 2 - 24;
  return cardWidth;
}

class InactiveServer extends React.Component {
  state = {
    cardWidth: getInactiveServerWidth(screenWidth)
  };

  componentDidMount() {
    Dimensions.addEventListener("change", this.adaptLayout);
  }

  adaptLayout = dimensions => {
    this.setState({
      cardWidth: getInactiveServerWidth(dimensions.window.width)
    });
  };

  render() {
    return (
      <Container style={{ width: this.state.cardWidth }}>
        <Cover>
          <Image source={this.props.image} />
          <Logo source={this.props.logo} resizeMode="contain" />
        </Cover>

      </Container>
    );
  }
}

export default InactiveServer;

const Container = styled.View`
  height: 280px;
  background: white;
  margin: 16px 8px;
  border-radius: 16px;
`;

const Cover = styled.View`
  aspect-ratio: 1;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
  justify-content: flex-end;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Logo = styled.Image`
  height: 32px;
  left: 16px;
  position: absolute;
  top: 16px;
  width: 32px;
`;