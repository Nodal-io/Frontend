import React from "react";
import styled from "styled-components";
import { Animated, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MenuItem from "./MenuItem";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    closeMenu: () => dispatch({
        type: "CLOSE_MENU"
    })
  };
}

const screenHeight = Dimensions.get("window").height;

class Menu extends React.Component {
    state = {
        top: new Animated.Value(screenHeight)
    };

    componentDidMount() {
      this.toggleMenu();
    }

    componentDidUpdate() {
      this.toggleMenu();
    }

    toggleMenu = () => {
      if (this.props.action == "openMenu") {
        Animated.spring(this.state.top, {
          toValue: 0
      }).start();
      }

      if (this.props.action == "closeMenu") {
        Animated.spring(this.state.top, {
          toValue: screenHeight
      }).start();
      }
    };

    render() {
        return (
            <AnimatedContainer style={{ top: this.state.top }}>
                        <TouchableOpacity
                            onPress={this.props.closeMenu}
                            style={{
                                position: "absolute",
                                top: 48,
                                right: 32,
                                zIndex: 1
                            }}
                        >
                                <CloseView>
                                    <Ionicons name="ios-close" size={32} color="#546bfb" />
                                </CloseView>
                        </TouchableOpacity>
                    <Content>
                        {items.map((item, index) => (
                            <MenuItem
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                text={item.text}
                            />
                        ))}
                    </Content>
            </AnimatedContainer>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const CloseView = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: #FFFFFF;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  position: absolute;
  background: black;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Content = styled.View`
  height: ${screenHeight};
  background: #EEEEEE;
  padding-left: 32px;
  padding-top: 80px;
`;

const items = [
    {
      icon: "ios-settings",
      title: "Account",
      text: "settings"
    },
    {
      icon: "ios-card",
      title: "Billing",
      text: "payments"
    },
    {
      icon: "ios-compass",
      title: "Learn React",
      text: "start course"
    },
    {
      icon: "ios-exit",
      title: "Log out",
      text: "see you soon!"
    }
  ];