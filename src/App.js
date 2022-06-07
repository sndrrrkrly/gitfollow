import { MainLayout } from './components/layouts/MainLayout';
import { Landing } from './modules/landing/Landing';

const App = () => {
     return (
          <MainLayout>
               <Landing />
          </MainLayout>
     );
};

export default App;