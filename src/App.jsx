import Main from './Pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InfoProvider from './context/InfoProvider';
import Field from './Pages/Field';
import "./App.css";


function App() {

  return (
    <BrowserRouter>
      <InfoProvider>
        <Routes>
          <Route exact path="/" element={<Main />}>
          </Route>
          <Route path="/field" element={<Field />} />
        </Routes>
      </InfoProvider>
    </BrowserRouter>
  )
}

export default App
