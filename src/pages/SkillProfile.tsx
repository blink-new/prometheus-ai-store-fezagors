import { useParams } from 'react-router-dom';
import { Star, Shield, Lock, Bot, Zap, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export function SkillProfile() {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg mb-6" />
          
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Smart Home Navigator</h1>
            <p className="text-muted-foreground mb-4">
              Advanced home automation and assistance for Cyber Butler robots
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 font-medium">4.9</span>
                <span className="ml-1 text-muted-foreground">(89 reviews)</span>
              </div>
              <Badge className="bg-green-100 text-green-800 border-green-200">
                <Shield className="h-3 w-3 mr-1" />
                Verified
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                High Trust
              </Badge>
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bot className="h-5 w-5 mr-2" />
                Cyber Butler Compatibility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Hardware Requirements</span>
                  <Badge variant="secondary">Met</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Safety Protocols</span>
                  <Badge variant="secondary">Verified</Badge>
                </div>
                <div className="flex justify-between">
                  <span>API Compatibility</span>
                  <Badge variant="secondary">v2.1+</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Usage Scenarios</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Room-by-room navigation and mapping</li>
                <li>• Voice-controlled home automation</li>
                <li>• Emergency response protocols</li>
                <li>• Energy optimization routines</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">500 PPT</CardTitle>
              <CardDescription>Requires token staking</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Lock className="h-4 w-4 text-yellow-600 mr-2" />
                  <span className="text-sm font-medium">Security Staking Required</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  This skill requires 1000 PPT staking for security validation
                </p>
              </div>
              <Button className="w-full gradient-violet text-white">
                Stake & Purchase
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Trust Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Security Tests</span>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Community Reviews</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Performance</span>
                    <span className="text-sm font-medium">98%</span>
                  </div>
                  <Progress value={98} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}