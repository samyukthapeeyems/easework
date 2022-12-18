import Main from './src/Main';
import 'react-native-gesture-handler';
import {AuthProvider} from './src/contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Main></Main>
    </AuthProvider>
  );
};

export default App;
