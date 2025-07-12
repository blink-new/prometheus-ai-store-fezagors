import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Zap, 
  Settings, 
  Shield, 
  Coins, 
  Moon, 
  Sun,
  Cpu,
  User,
  LayoutDashboard,
  Brain,
  Database,
  ShieldCheck
} from 'lucide-react';
import { useTheme } from './theme-provider';

export function Navigation() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Prometheus
            </span>
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button 
                variant={isActive('/') ? "secondary" : "ghost"} 
                className="text-sm font-medium"
              >
                <LayoutDashboard className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <Link to="/developer">
              <Button 
                variant={isActive('/developer') ? "secondary" : "ghost"} 
                className="text-sm font-medium"
              >
                <Brain className="h-4 w-4 mr-2" />
                Personas
              </Button>
            </Link>
            <Link to="/tokens">
              <Button 
                variant={isActive('/tokens') ? "secondary" : "ghost"} 
                className="text-sm font-medium"
              >
                <Database className="h-4 w-4 mr-2" />
                Memory
              </Button>
            </Link>
            <Link to="/tokens">
              <Button 
                variant={isActive('/tokens') ? "secondary" : "ghost"} 
                className="text-sm font-medium"
              >
                <Coins className="h-4 w-4 mr-2" />
                Tokens
              </Button>
            </Link>
            <Link to="/governance">
              <Button 
                variant={isActive('/governance') ? "secondary" : "ghost"} 
                className="text-sm font-medium"
              >
                <ShieldCheck className="h-4 w-4 mr-2" />
                Safety
              </Button>
            </Link>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* PPT Token Balance */}
            <div className="flex items-center space-x-2 bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">1247 PPT</span>
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block text-right">
                <div className="text-sm font-medium">Alex Chen</div>
                <div className="text-xs text-muted-foreground">Pro Mode</div>
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage src="" alt="Alex Chen" />
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  A
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}