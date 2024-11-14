import "./App.css";
import Banner from "./banner/Banner";
import Card from "./card/Card";
import {
  blueColorScheme,
  blueItems,
  blueTitle,
  greenColorScheme,
  greenItems,
  greenTitle,
  pinkColorScheme,
  pinkItems,
  pinkTitle,
} from "./card/CardProps";
import Carousel from "./carousel/Carousel";
import { img } from "./carousel/Image";
import Customized from "./customize/Customized";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Register from "./register/Register";
import { content } from "./testimony/Content";
import Testimony from "./testimony/Testimony";

function App() {
  return (
    <>
      <Customized>
        <Header />
        <Banner />

        {/* Card content */}
        <Card
          items={blueItems}
          title={blueTitle}
          colorScheme={blueColorScheme}
          tabCentered={true}
        />
        <Card
          items={pinkItems}
          title={pinkTitle}
          colorScheme={pinkColorScheme}
        />
        <Card
          items={greenItems}
          title={greenTitle}
          colorScheme={greenColorScheme}
        />

        <Carousel images={img} />

        <Testimony content={content}/>

        <Register />

        <Footer/>
      </Customized>
    </>
  );
}

export default App;
