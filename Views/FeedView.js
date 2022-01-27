import React from "react";
import styled from "styled-components";

class FeedView extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Text>Feed</Text>
      </Container>
    );
  }
}

export default FeedView;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;