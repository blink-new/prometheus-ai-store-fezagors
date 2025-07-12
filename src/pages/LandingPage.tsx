import { useState } from 'react';
import { Search, Filter, Star, Shield, Zap, Bot, Code, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

export function LandingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('tools');

  const toolsData = [
    {
      id: 'text-analyzer',
      name: 'Advanced Text Analyzer',
      description: 'AI-powered text analysis with sentiment, entity extraction, and summarization',
      price: 150,
      rating: 4.8,
      reviews: 234,
      category: 'NLP',
      safety: 'Verified',
      image: '/api/placeholder/300/200',
      developer: 'NeuralLabs Inc.'
    },
    {
      id: 'image-enhancer',
      name: 'Image Enhancement Suite',
      description: 'Professional-grade image upscaling and enhancement using latest AI models',
      price: 300,
      rating: 4.9,
      reviews: 189,
      category: 'Computer Vision',
      safety: 'Verified',
      image: '/api/placeholder/300/200',
      developer: 'PixelCraft AI'
    },
    {
      id: 'code-assistant',
      name: 'Smart Code Assistant',
      description: 'Intelligent code completion, bug detection, and optimization suggestions',
      price: 200,
      rating: 4.7,
      reviews: 567,
      category: 'Development',
      safety: 'Verified',
      image: '/api/placeholder/300/200',
      developer: 'DevBoost Labs'
    }
  ];

  const skillsData = [
    {
      id: 'home-assistant',
      name: 'Smart Home Navigator',
      description: 'Advanced home automation and assistance for Cyber Butler robots',
      price: 500,
      rating: 4.9,
      reviews: 89,
      category: 'Home Automation',
      safety: 'Verified',
      trust: 'High',
      image: '/api/placeholder/300/200',
      developer: 'RoboHome Inc.'
    },
    {
      id: 'security-patrol',
      name: 'Security Patrol AI',
      description: 'Intelligent security monitoring and threat detection for robotic systems',
      price: 800,
      rating: 4.8,
      reviews: 67,
      category: 'Security',
      safety: 'Pending',
      trust: 'Medium',
      image: '/api/placeholder/300/200',
      developer: 'SecureBot Labs'
    },
    {
      id: 'garden-care',
      name: 'Garden Care Specialist',
      description: 'Automated plant care, monitoring, and maintenance for robotic gardeners',
      price: 350,
      rating: 4.6,
      reviews: 145,
      category: 'Agriculture',
      safety: 'Verified',
      trust: 'High',
      image: '/api/placeholder/300/200',
      developer: 'GreenTech AI'
    }
  ];

  const currentData = activeTab === 'tools' ? toolsData : skillsData;

  const getSafetyBadge = (safety: string) => {
    const colors = {
      'Verified': 'bg-green-100 text-green-800 border-green-200',
      'Pending': 'bg-gray-100 text-black border-gray-200',
      'Rejected': 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[safety as keyof typeof colors] || colors.Pending;
  };

  const getTrustBadge = (trust: string) => {
    const colors = {
      'High': 'bg-blue-100 text-blue-800 border-blue-200',
      'Medium': 'bg-orange-100 text-orange-800 border-orange-200',
      'Low': 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[trust as keyof typeof colors] || colors.Medium;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-violet text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            The Future of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-pink-200">
              Modular AI
            </span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Discover, compose, and deploy AI modules across digital tools and robotic systems. 
            Build the future with composable AI solutions powered by Power Tokens (PPT).
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary" className="text-purple-700">
              <Zap className="mr-2 h-5 w-5" />
              Explore Tools
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-700">
              <Bot className="mr-2 h-5 w-5" />
              Browse Skills
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">2,847</div>
              <div className="text-muted-foreground">AI Modules</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">15,432</div>
              <div className="text-muted-foreground">Developers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">₱89M</div>
              <div className="text-muted-foreground">PPT Volume</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">99.7%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Marketplace */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search AI modules, developers, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nlp">NLP</SelectItem>
                    <SelectItem value="vision">Computer Vision</SelectItem>
                    <SelectItem value="robotics">Robotics</SelectItem>
                    <SelectItem value="automation">Automation</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-100">0-100 PPT</SelectItem>
                    <SelectItem value="100-500">100-500 PPT</SelectItem>
                    <SelectItem value="500+">500+ PPT</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Safety Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="verified">Verified</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="all">All</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Tabs for Tools vs Skills */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="tools" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  Tools (Software)
                </TabsTrigger>
                <TabsTrigger value="skills" className="flex items-center gap-2">
                  <Bot className="h-4 w-4" />
                  Skills (Robotics)
                </TabsTrigger>
              </TabsList>

              <TabsContent value="tools" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {toolsData.map((tool) => (
                    <Link key={tool.id} to={`/tool/${tool.id}`}>
                      <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0 bg-gradient-to-br from-card to-card/50">
                        <div className="aspect-video bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 rounded-t-lg" />
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg">{tool.name}</CardTitle>
                            <Badge className={getSafetyBadge(tool.safety)}>
                              <Shield className="h-3 w-3 mr-1" />
                              {tool.safety}
                            </Badge>
                          </div>
                          <CardDescription className="text-sm">{tool.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center">
                                <Star className="h-4 w-4 fill-black text-black" />
                                <span className="ml-1 text-sm font-medium">{tool.rating}</span>
                              </div>
                              <span className="text-sm text-muted-foreground">({tool.reviews})</span>
                            </div>
                            <Badge variant="secondary">{tool.category}</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-primary">{tool.price} PPT</span>
                            <span className="text-sm text-muted-foreground">{tool.developer}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="skills" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillsData.map((skill) => (
                    <Link key={skill.id} to={`/skill/${skill.id}`}>
                      <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0 bg-gradient-to-br from-card to-card/50">
                        <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-t-lg" />
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg">{skill.name}</CardTitle>
                            <div className="flex space-x-1">
                              <Badge className={getSafetyBadge(skill.safety)}>
                                <Shield className="h-3 w-3 mr-1" />
                                {skill.safety}
                              </Badge>
                              <Badge className={getTrustBadge(skill.trust)}>
                                {skill.trust}
                              </Badge>
                            </div>
                          </div>
                          <CardDescription className="text-sm">{skill.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center">
                                <Star className="h-4 w-4 fill-black text-black" />
                                <span className="ml-1 text-sm font-medium">{skill.rating}</span>
                              </div>
                              <span className="text-sm text-muted-foreground">({skill.reviews})</span>
                            </div>
                            <Badge variant="secondary">{skill.category}</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-primary">{skill.price} PPT</span>
                            <span className="text-sm text-muted-foreground">{skill.developer}</span>
                          </div>
                          <div className="mt-2 text-xs text-muted-foreground">
                            Requires Cyber Butler compatibility
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Prometheus AI?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The most secure, transparent, and developer-friendly AI marketplace in the ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Security First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every module undergoes rigorous security testing and verification before deployment
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Instant Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deploy AI modules instantly with our sandbox testing and automated deployment pipeline
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Developer Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Earn PPT tokens for quality modules with transparent reward distribution
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}