import Compositor from './components/Compositor/Compositor';
import styled from 'styled-components';
import { theme } from './Theme/theme';

function App() {
  return (
    <AppContainer>
      <Compositor />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  margin: 20px;
  padding: 10px;
  color: ${theme.black};
  font-weight: 500;
`;