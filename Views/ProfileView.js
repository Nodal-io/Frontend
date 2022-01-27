import React from "react";
import styled from "styled-components";

class ProfileView extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Text>Profile</Text>
      </Container>
    );
  }
}

export default ProfileView;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;