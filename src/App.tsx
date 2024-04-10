import styled from "@emotion/styled";
import { Footer } from "./components/Footer/Footer";
import { BothMenus } from "./features/bothmenus";

function App() {
  return (
    <MainLayout>
      <h1>Dynamic Menu</h1>

      <BothMenus />
      <Spacer />
      <Footer />
    </MainLayout>
  );
}

export default App;

const Spacer = styled.div`
  flex-grow: 1;
`;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
