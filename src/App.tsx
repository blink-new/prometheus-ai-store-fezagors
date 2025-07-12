import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import { Navigation } from './components/Navigation';
import { LandingPage } from './pages/LandingPage';
import { ToolProfile } from './pages/ToolProfile';
import { SkillProfile } from './pages/SkillProfile';
import { DeveloperConsole } from './pages/DeveloperConsole';
import { Governance } from './pages/Governance';
import { TokenMarketplace } from './pages/TokenMarketplace';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="prometheus-theme">
      <Router>
        <div className="min-h-screen bg-background">
          <Navigation />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/tool/:id" element={<ToolProfile />} />
            <Route path="/skill/:id" element={<SkillProfile />} />
            <Route path="/developer" element={<DeveloperConsole />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/tokens" element={<TokenMarketplace />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;