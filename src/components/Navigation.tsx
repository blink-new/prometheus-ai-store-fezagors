import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Settings, 
  Shield, 
  Coins, 
  Moon, 
  Sun,
  Cpu,
  Cog
} from 'lucide-react';
import { useTheme } from './theme-provider';

export function Navigation() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b bg-card/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-violet rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Prometheus AI
            </span>
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button 
                variant={isActive('/') ? "default" : "ghost"} 
                className="text-sm"
              >
                Marketplace
              </Button>
            </Link>
            <Link to="/developer">
              <Button 
                variant={isActive('/developer') ? "default" : "ghost"} 
                className="text-sm"
              >
                <Cog className="h-4 w-4 mr-2" />
                Developer
              </Button>
            </Link>
            <Link to="/governance">
              <Button 
                variant={isActive('/governance') ? "default" : "ghost"} 
                className="text-sm"
              >
                <Shield className="h-4 w-4 mr-2" />
                Governance
              </Button>
            </Link>
            <Link to="/tokens">
              <Button 
                variant={isActive('/tokens') ? "default" : "ghost"} 
                className="text-sm"
              >
                <Coins className="h-4 w-4 mr-2" />
                Tokens
                <Badge variant="secondary" className="ml-2 bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700">
                  PPT
                </Badge>
              </Button>
            </Link>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="w-9 px-0"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Button className="gradient-violet text-white hover:opacity-90 transition-opacity">
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}