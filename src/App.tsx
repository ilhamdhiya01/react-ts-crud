import Navbar from './components/Navbar';
import { Container } from './components/Container';
import { HomePage } from './Pages/HomePage';
import { DetailPostPage } from './Pages/DetailPostPage';
import { Routes, Route } from 'react-router-dom';
import { FormEditPage } from './Pages/FormEditPage';
function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/edit/:id' element={<FormEditPage />} />
          <Route path='/detail/:id' element={<DetailPostPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
