import {Routes, Route} from 'react-router';
import HomePage from './page/homePage.jsx';




export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    // <div>I am Ajanlekoko</div>
  )
} 