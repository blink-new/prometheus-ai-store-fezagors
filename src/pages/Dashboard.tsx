import { useState } from 'react';
import { MessageSquare, Plus, RotateCcw, Send, Settings, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Session {
  id: string;
  title: string;
  time: string;
  messageCount: number;
  lastMessage: string;
}

export function Dashboard() {
  const [smartRouterEnabled, setSmartRouterEnabled] = useState(true);
  const [message, setMessage] = useState('');

  const recentSessions: Session[] = [
    {
      id: '1',
      title: 'Code Review Discussion',
      time: '11:36:46',
      messageCount: 12,
      lastMessage: 'Let me analyze the security implications...'
    },
    {
      id: '2',
      title: 'Strategic Planning',
      time: '10:36:46',
      messageCount: 8,
      lastMessage: 'Based on market trends analysis...'
    },
    {
      id: '3',
      title: 'Technical Architecture',
      time: '09:36:46',
      messageCount: 15,
      lastMessage: 'The microservices approach would be optimal...'
    },
    {
      id: '4',
      title: 'Data Analysis Query',
      time: '11:36:46',
      messageCount: 6,
      lastMessage: 'Processing the dataset parameters...'
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-background">
      {/* Sidebar - Recent Sessions */}
      <div className="w-80 border-r border-border/40 bg-card/50">
        <div className="p-4 border-b border-border/40">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Sessions</h2>
            <Button variant="ghost" size="sm">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <ScrollArea className="flex-1">
          <div className="p-4 space-y-3">
            {recentSessions.map((session) => (
              <Card key={session.id} className="cursor-pointer transition-all hover:bg-accent/50 border-border/40">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-sm">{session.title}</h3>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground mb-2">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{session.time}</span>
                    <span className="mx-2">•</span>
                    <span>{session.messageCount} msgs</span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {session.lastMessage}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-border/40 bg-card/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20">
                <Settings className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Smart Router</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Smart Router</span>
                <Switch 
                  checked={smartRouterEnabled} 
                  onCheckedChange={setSmartRouterEnabled}
                />
              </div>
              <Button variant="outline" size="sm">
                <RotateCcw className="h-4 w-4 mr-2" />
                New Chat
              </Button>
            </div>
          </div>
          
          {smartRouterEnabled && (
            <div className="mt-3 flex items-center space-x-2 text-sm text-muted-foreground">
              <Zap className="h-4 w-4" />
              <span>Automatically selecting the best AI model for each response</span>
            </div>
          )}
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 p-6">
          <div className="max-w-3xl mx-auto">
            {/* Smart Router Introduction */}
            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Settings className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline" className="text-primary border-primary/30">
                        Smart Router
                      </Badge>
                    </div>
                    <p className="text-foreground mb-3">
                      Hello! I'm your AI orchestrator. I can route your queries to the best available AI model or you can choose a specific persona. How can I help you today?
                    </p>
                    <div className="text-xs text-muted-foreground">
                      11:36:47
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-border/40 bg-card/50">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="pr-12 h-12 bg-background border-border/40 focus:border-primary/50"
              />
              <Button
                size="sm"
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}