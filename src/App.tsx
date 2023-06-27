import {
  NavBar,
  Banner,
  Skills,
  Projects,
  FormContact,
  Footer,
} from "./components";

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <FormContact />
      <Footer />
    </div>
  );
};
