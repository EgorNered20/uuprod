import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import FieldActiv from './pages/SwitcherBtn/FieldActiv'
import Utilities from './pages/SwitcherBtn/Utilities'
import Clients from './pages/SwitcherBtn/Clients'
import Burgermenu from './components/Burgermenu/Burgermenu'
import Contacts from './pages/Contacts/Contacts'
import Video from './pages/Video/Video'
import VisualD from './pages/UtilityPages/3D'
import Presentation from './pages/UtilityPages/Presentation/Presentation'
import Reklcomp from './pages/UtilityPages/Reklcomp'
import CreativeGifs from './pages/UtilityPages/CreativeGifs'
import Promotional from './pages/UtilityPages/Promotional'
import Presentbiz from './pages/UtilityPages/Presentbiz'
import Foodstyling from './pages/UtilityPages/Foodstyling'
import SinglePage from './pages/SingleForActivivty/SinglePage'
import About from './pages/About/About'
import Footer from './components/Footer/Footer'
import Vacansies from './pages/Vacancies/Vacancies'
import Cinemas from './pages/Cinemas/Cinemas'

const App = () => {
  return (
      <>
      <BrowserRouter>
      <Burgermenu />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/field' element={<FieldActiv />} />
              <Route path='/utilities' element={<Utilities />} />
              <Route path='/clients' element={<Clients />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/video/:id' element={<Video />} />
              <Route path='/3d' element={<VisualD />}></Route>
              <Route path='/presentation' element={<Presentation />} />
              <Route path='/reklcompania' element={<Reklcomp />} />
              <Route path='/gifts' element={<CreativeGifs />} />
              <Route path='/promotional' element={<Promotional />} />
              <Route path='/presentationbiz' element={<Presentbiz />} />
              <Route path='/foodstyling' element={<Foodstyling />} />
              <Route path='/field/:id' element={<SinglePage />} />
              <Route path='/about' element={<About />} />
              <Route path='/vacancies' element={<Vacansies />} />
              <Route path='/cinemas' element={<Cinemas />} />
          </Routes>
          <Footer />
      </BrowserRouter>
      </>
      
  );
}

export default App;
