import {Routes, Route} from 'react-router-dom';
import HomePage from './page/HomePage.jsx';
import SupportPage from './page/SupportPage.jsx';




export default function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SupportPage" element={<SupportPage />} />
      </Routes>
  )
} 