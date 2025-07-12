import { TrendingUp, TrendingDown, Coins, Trophy, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function TokenMarketplace() {
  const topDevelopers = [
    {
      rank: 1,
      name: 'NeuralLabs Inc.',
      earnings: '45,230 PPT',
      modules: 12,
      rating: 4.9,
      change: '+15%'
    },
    {
      rank: 2,
      name: 'RoboTech Solutions',
      earnings: '38,940 PPT',
      modules: 8,
      rating: 4.8,
      change: '+8%'
    },
    {
      rank: 3,
      name: 'AI Innovators',
      earnings: '32,100 PPT',
      modules: 15,
      rating: 4.7,
      change: '+22%'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Power Token (PPT) Marketplace</h1>
        <p className="text-muted-foreground">
          Trade PPT tokens, view market analytics, and explore developer rankings
        </p>
      </div>

      <Tabs defaultValue="marketplace" className="space-y-6">
        <TabsList>
          <TabsTrigger value="marketplace">Token Marketplace</TabsTrigger>
          <TabsTrigger value="leaderboard">Developer Leaderboard</TabsTrigger>
          <TabsTrigger value="analytics">Market Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="marketplace" className="space-y-6">
          {/* PPT Price Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Coins className="h-5 w-5 mr-2 text-purple-600" />
                  PPT Price
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600">$0.024</div>
                <div className="flex items-center text-green-600 text-sm">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +12.5% (24h)
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Cap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$24.8M</div>
                <div className="text-sm text-muted-foreground">Circulating: 1.03B PPT</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>24h Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$892K</div>
                <div className="text-sm text-muted-foreground">36.2M PPT traded</div>
              </CardContent>
            </Card>
          </div>

          {/* Trading Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Buy PPT</CardTitle>
                <CardDescription>Purchase Power Tokens to access AI modules</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Amount (USD)</label>
                  <div className="flex space-x-2">
                    <input 
                      type="number" 
                      placeholder="100.00" 
                      className="flex-1 px-3 py-2 border rounded-md"
                    />
                    <Button>Buy PPT</Button>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  ≈ 4,166 PPT at current rate
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Sell PPT</CardTitle>
                <CardDescription>Convert your Power Tokens back to USD</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Amount (PPT)</label>
                  <div className="flex space-x-2">
                    <input 
                      type="number" 
                      placeholder="1000" 
                      className="flex-1 px-3 py-2 border rounded-md"
                    />
                    <Button variant="outline">Sell PPT</Button>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  ≈ $24.00 at current rate
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Your Portfolio */}
          <Card>
            <CardHeader>
              <CardTitle>Your PPT Portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">8,240</div>
                  <div className="text-sm text-muted-foreground">PPT Balance</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">$197.76</div>
                  <div className="text-sm text-muted-foreground">USD Value</div>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">15</div>
                  <div className="text-sm text-muted-foreground">Modules Owned</div>
                </div>
                <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">1,200</div>
                  <div className="text-sm text-muted-foreground">Staked PPT</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leaderboard" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="h-5 w-5 mr-2 text-black" />
                Top Developers by Earnings
              </CardTitle>
              <CardDescription>
                Ranked by total PPT earned from module sales and staking rewards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topDevelopers.map((dev) => (
                  <div key={dev.rank} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        dev.rank === 1 ? 'bg-gray-100 text-black' :
                        dev.rank === 2 ? 'bg-gray-100 text-black' :
                        dev.rank === 3 ? 'bg-gray-100 text-black' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        #{dev.rank}
                      </div>
                      <div>
                        <div className="font-semibold">{dev.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {dev.modules} modules • {dev.rating} rating
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-purple-600">{dev.earnings}</div>
                      <div className="text-sm text-green-600">{dev.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Rated Modules</CardTitle>
              <CardDescription>Highest rated modules by community reviews</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <div className="font-semibold">Advanced Text Analyzer</div>
                    <div className="text-sm text-muted-foreground">NeuralLabs Inc.</div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-black text-black mr-1" />
                    <span className="font-semibold">4.9</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <div className="font-semibold">Smart Home Navigator</div>
                    <div className="text-sm text-muted-foreground">RoboHome Inc.</div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-black text-black mr-1" />
                    <span className="font-semibold">4.9</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>PPT Usage Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Module Purchases</span>
                    <span className="font-semibold">68%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Staking Rewards</span>
                    <span className="font-semibold">22%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Trading</span>
                    <span className="font-semibold">10%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>7-day trend</span>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +18.5%
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>30-day trend</span>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +45.2%
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>All-time high</span>
                    <span className="font-semibold">$0.089</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Network Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">15,432</div>
                  <div className="text-sm text-muted-foreground">Active Developers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">2,847</div>
                  <div className="text-sm text-muted-foreground">Total Modules</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">89M</div>
                  <div className="text-sm text-muted-foreground">PPT Circulating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">12M</div>
                  <div className="text-sm text-muted-foreground">PPT Staked</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}