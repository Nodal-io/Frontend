import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

const ServerType = props => (
  <TouchableOpacity>
    <Container>
        <Text>{props.text}</Text>
    </Container>
  </TouchableOpacity>
);

export default ServerType;

const Container = styled.View`
  align-items: center;
  background: white;
  border-radius: 16px;
  flex-direction: row;
  height: 128px;
  margin: 0px 8px;
  width: 128px;
`;

const Text = styled.Text`
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
`;