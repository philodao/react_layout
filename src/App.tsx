import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import DashBoard from './brand/DashBoard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
