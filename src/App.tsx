import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout'
import Projects from './pages/projects/Projects'

export default function App() {

  const varToForceBundle = 'hi';

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
