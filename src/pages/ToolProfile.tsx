import { useParams } from 'react-router-dom';
import { Star, Shield, Download, Play, GitBranch, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function ToolProfile() {
  const { id } = useParams();

  const tool = {
    id: 'text-analyzer',
    name: 'Advanced Text Analyzer',
    description: 'AI-powered text analysis with sentiment, entity extraction, and summarization capabilities. Built for enterprise-grade applications with high accuracy and performance.',
    price: 150,
    rating: 4.8,
    reviews: 234,
    downloads: 1850,
    category: 'NLP',
    safety: 'Verified',
    developer: 'NeuralLabs Inc.',
    version: '2.1.0',
    lastUpdated: '2024-01-15',
    changelog: [
      { version: '2.1.0', date: '2024-01-15', changes: 'Added multilingual support, improved accuracy' },
      { version: '2.0.5', date: '2024-01-10', changes: 'Bug fixes and performance improvements' },
      { version: '2.0.0', date: '2024-01-01', changes: 'Major update with new entity extraction models' }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Hero Section */}
          <div className="mb-8">
            <div className="aspect-video bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 rounded-lg mb-6" />
            
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{tool.name}</h1>
                <p className="text-muted-foreground mb-4">{tool.description}</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 font-medium">{tool.rating}</span>
                    <span className="ml-1 text-muted-foreground">({tool.reviews} reviews)</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    <Shield className="h-3 w-3 mr-1" />
                    {tool.safety}
                  </Badge>
                  <Badge variant="secondary">{tool.category}</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="demo">Live Demo</TabsTrigger>
              <TabsTrigger value="changelog">Changelog</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Module Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Features</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Advanced sentiment analysis with 95% accuracy</li>
                      <li>• Named entity recognition for people, organizations, locations</li>
                      <li>• Text summarization with customizable length</li>
                      <li>• Support for 15+ languages</li>
                      <li>• Real-time processing with sub-second response times</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Use Cases</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Social media monitoring and analysis</li>
                      <li>• Customer feedback processing</li>
                      <li>• Content moderation systems</li>
                      <li>• Document summarization tools</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="demo">
              <Card>
                <CardHeader>
                  <CardTitle>Try It Live</CardTitle>
                  <CardDescription>Test the module with your own data before purchasing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 p-8 rounded-lg text-center">
                    <Play className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground mb-4">Interactive demo will load here</p>
                    <Button>Launch Demo</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="changelog">
              <Card>
                <CardHeader>
                  <CardTitle>Version History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tool.changelog.map((entry, index) => (
                      <div key={index} className="border-l-2 border-primary/20 pl-4">
                        <div className="flex items-center space-x-2 mb-1">
                          <GitBranch className="h-4 w-4 text-primary" />
                          <span className="font-semibold">v{entry.version}</span>
                          <span className="text-sm text-muted-foreground">{entry.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{entry.changes}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <Card>
                <CardHeader>
                  <CardTitle>User Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="font-semibold">DevUser123</span>
                        <span className="text-sm text-muted-foreground">2 days ago</span>
                      </div>
                      <p className="text-sm">Excellent module! The accuracy is impressive and integration was seamless.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Purchase Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{tool.price} PPT</CardTitle>
              <CardDescription>One-time purchase</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full gradient-violet text-white">
                Purchase Module
              </Button>
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Preview Code
              </Button>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card>
            <CardHeader>
              <CardTitle>Module Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Downloads</span>
                <span className="font-semibold">{tool.downloads.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Version</span>
                <span className="font-semibold">v{tool.version}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Updated</span>
                <span className="font-semibold">{tool.lastUpdated}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Developer</span>
                <span className="font-semibold">{tool.developer}</span>
              </div>
            </CardContent>
          </Card>

          {/* Developer Card */}
          <Card>
            <CardHeader>
              <CardTitle>Developer Info</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">NL</span>
                </div>
                <div>
                  <div className="font-semibold">{tool.developer}</div>
                  <div className="text-sm text-muted-foreground">Verified Developer</div>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                View Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}