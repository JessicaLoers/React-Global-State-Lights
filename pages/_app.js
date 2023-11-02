import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  {
    id: "1",
    name: "Living Room",
    isOn: false,
  },
  {
    id: "2",
    name: "Living Room",
    isOn: false,
  },
  {
    id: "3",
    name: "Kitchen",
    isOn: false,
  },
  {
    id: "4",
    name: "Bedroom",
    isOn: false,
  },
  {
    id: "5",
    name: "Bathroom",
    isOn: false,
  },
  {
    id: "6",
    name: "Garage",
    isOn: false,
  },
  {
    id: "7",
    name: "Porch",
    isOn: false,
  },
  {
    id: "8",
    name: "Garden",
    isOn: false,
  },
  {
    id: "9",
    name: "Office",
    isOn: false,
  },
];

export default function App({ Component, pageProps }) {
  const [lights, setLight] = useState(initialLights);

  const numberOfLightsOn = lights.filter((light) => light.isOn).length;

  function handleLightToggle(id) {
    setLight(
      lights.map((light) => {
        return light.id === id ? { ...light, isOn: !light.isOn } : light;
      })
    );
  }

  function handleAllLightsOn() {
    setLight(lights.map((light) => ({ ...light, isOn: true })));
  }

  function handleAllLightsOff() {
    setLight(lights.map((light) => ({ ...light, isOn: false })));
  }

  return (
    <Layout isDimmed={numberOfLightsOn === 0}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        handleLightToggle={handleLightToggle}
        numberOfLightsOn={numberOfLightsOn}
        handleAllLightsOn={handleAllLightsOn}
        handleAllLightsOff={handleAllLightsOff}
      />
    </Layout>
  );
}
