import { Route, Routes } from 'react-router-dom';
import './style.scss';
import MainPage from './components/MainContainer';
import SecondForm from './components/SecondForm';
import ThirdForm from './components/ThirdForm';
import FourthForm from './components/FourthForm';

function App() {

  return (
    <div className="AppCover">

      <Routes>
        <Route path='/' element={<MainPage /> } />
        <Route path='/second-form' element={<SecondForm />} />
        <Route path='/third-form' element={<ThirdForm />} />
        <Route path='/fourth-form' element={<FourthForm />} />
      </Routes>
    </div>
  )
}

export default App
