import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Gallery from '../pages/Gallery';
import Projects from '../pages/Projects';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
