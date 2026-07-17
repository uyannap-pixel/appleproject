import {Routes, Route} from 'react-router-dom';
import HomePage from './page/HomePage.jsx';




export default function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
  )
} 