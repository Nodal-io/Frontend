import ActiveServer from "../Components/ActiveServer";
import InactiveServer from "../Components/InactiveServer";
import ServerType from "../Components/ServerType";
import Menu from "../Components/Menu";
import React from "react";
import styled from "styled-components";
import { Animated, Easing, ScrollView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () => dispatch({
      type: "OPEN_MENU"
    })
  };
}

class NodeView extends React.Component {
  static navigationOptions = {
    header: null
  }; 

  state = {
    scale: new Animated.Value(1)
  };

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.spring(this.state.scale, {
        toValue: 0.9
      }).start();
    }

    if (this.props.action == "closeMenu") {
      Animated.spring(this.state.scale, {
        toValue: 1
      }).start();
    }
  };

    render() {
        return (
          <RootView>
                   <Menu />
            <Container
            >
                    <ScrollView>
                        <NavigationBar>
                        <TouchableOpacity
                                onPress={this.props.openMenu}
                          >
                            <Wallet />
                            </TouchableOpacity>
                        </NavigationBar>
            <ScrollView
            style={{
              flexDirection: "row",
              paddingBottom: 32,
              paddingLeft: 8,
              paddingTop: 80
            }}
            horizontal={true}
            showsHorizontalScrollIndicator = {false}
          >
            {logos.map((logo, index) => (
              <ServerType
                key={index}
                text={logo.text}
              />
            ))}
          </ScrollView>
          <Subtitle>Active Servers</Subtitle>
          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 32 }}
            showsHorizontalScrollIndicator={false}
          >
            {cards.map((card, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  this.props.navigation.push("Server");
                }}
              >
                <ActiveServer
                  key={index}
                  image={card.image}
                  subtitle={card.subtitle}
                  caption={card.caption}
                  logo={card.logo}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Subtitle>Inactive Servers</Subtitle>
          <CoursesContainer>
            {courses.map((course, index) => (
              <TouchableOpacity
              key={index}
              onPress={() => {
                this.props.navigation.push("Server");
              }}
            >
                <InactiveServer
                  key={index}
                  image={course.image}
                  title={course.title}
                  subtitle={course.subtitle}
                  logo={course.logo}
                />
              </TouchableOpacity>
            ))}
          </CoursesContainer>
          </ScrollView>
      </Container>
      </RootView>
    );
  }
}

export default connect(mapDispatchToProps, mapDispatchToProps)(NodeView)

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const cards = [
  {
    image: require("../Assets/CoverPhoto.jpg"),
    subtitle: "Information",
    caption: "Server 01",
    logo: require("../Assets/ServerType.png")
  },
  {
    image: require("../Assets/CoverPhoto.jpg"),
    subtitle: "Information",
    caption: "Server 02",
    logo: require("../Assets/ServerType.png")
  },
  {
    image: require("../Assets/CoverPhoto.jpg"),
    subtitle: "Information",
    caption: "Server 03",
    logo: require("../Assets/ServerType.png")
  },
  {
    image: require("../Assets/CoverPhoto.jpg"),
    subtitle: "Information",
    caption: "Server 04",
    logo: require("../Assets/ServerType.png")
  },
  {
    image: require("../Assets/CoverPhoto.jpg"),
    subtitle: "Information",
    caption: "Server 05",
    logo: require("../Assets/ServerType.png")
  },
  {
    image: require("../Assets/CoverPhoto.jpg"),
    subtitle: "Information",
    caption: "Server 06",
    logo: require("../Assets/ServerType.png")
  }
];

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const courses = [
  {
    title: "Title",
    subtitle: "Subtitle",
    image: require("../Assets/CoverPhoto.jpg"),
    logo: require("../Assets/ServerType.png"),
  },
  {
    title: "Title",
    subtitle: "Subtitle",
    image: require("../Assets/CoverPhoto.jpg"),
    logo: require("../Assets/ServerType.png"),
  },
  {
    title: "Title",
    subtitle: "Subtitle",
    image: require("../Assets/CoverPhoto.jpg"),
    logo: require("../Assets/ServerType.png"),
  },
  {
    title: "Title",
    subtitle: "Subtitle",
    image: require("../Assets/CoverPhoto.jpg"),
    logo: require("../Assets/ServerType.png"),
  },
  {
    title: "Title",
    subtitle: "Subtitle",
    image: require("../Assets/CoverPhoto.jpg"),
    logo: require("../Assets/ServerType.png"),
  },
  {
    title: "Title",
    subtitle: "Subtitle",
    image: require("../Assets/CoverPhoto.jpg"),
    logo: require("../Assets/ServerType.png"),
  }
];

const CoursesContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 16px;
  padding-left: 8px;
  padding-top: 16px;
`;

const logos = [
  {
    text: "DAO"
  },
  {
    text: "Social"
  },
  {
    text: "DeFi"
  },
  {
    text: "Gaming"
  },
  {
    text: "NFT"
  },
  {
    text: "Crypto"
  }
];

const NavigationBar = styled.View`
  margin-top: 48px;
  width: 100%;
  z-index: 1;
`;

const Subtitle = styled.Text`
  color: #5C26FF;
  font-size: 14px;
  font-weight: 600;
  margin-left: 32px;
  text-transform: uppercase;
`;

const Wallet = styled.View`
  background: #FFFFFF;
  border-radius: 16px;
  height: 64px;
  right: 32px;
  position: absolute;
  width: 64px;
`;