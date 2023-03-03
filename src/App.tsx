import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutMe from './pages/aboutMe/AboutMe'
import Layout from './layout/Layout'
import Projects from './pages/projects/Projects'
import { setStartupTheme } from './services/ThemeService';

export default function App() {

  setStartupTheme();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Projects />} />
          <Route path="about-me" element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
