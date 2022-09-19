import { Container } from "./components/Container.styled";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from "./components/Global";
import { Card } from './components/Card';
import { Footer } from "./components/Footer";
import content from './content';
import Header from "./components/Header";


const theme = {
  colors: {
    header: '#ebfbff',
    body: '#000',
    footer: '#003333'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {
            content.map((item, index) => (
              <Card key={index} item={item} />
            ))
          }
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
