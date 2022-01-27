import React from "react";
import styled from "styled-components";

const ActiveServer = props => (
    <Container>
        <Cover>
            <Image source={props.image} />
            <Logo source={props.logo} />
        </Cover>
        <Content>
            <Wrapper>
                <Caption>{props.caption}</Caption>
                <Subtitle>{props.subtitle}</Subtitle>
            </Wrapper>
        </Content>
    </Container>
);

export default ActiveServer;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`;

const Container = styled.View`
  background-color: #FFFFFF;
  border-radius: 16px;
  height: 340px;
  margin-left: 16px;
  margin-top: 32px;
  width: 272px;
`;

const Content = styled.View`
  padding-left: 0px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
`;

const Image = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Logo = styled.Image`
  height: 32px;
  left: 16px;
  position: absolute;
  top: 16px;
  width: 32px;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 4px;
`;


const Wrapper = styled.View`
  margin-left: 16px;
  bottom: -50;
`;