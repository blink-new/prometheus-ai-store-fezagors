import { Upload, Github, Play, DollarSign, Activity, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

export function DeveloperConsole() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Developer Console</h1>
        <p className="text-muted-foreground">
          Upload, test, and deploy your AI modules to the Prometheus marketplace
        </p>
      </div>

      <Tabs defaultValue="upload" className="space-y-6">
        <TabsList>
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="modules">My Modules</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="h-5 w-5 mr-2" />
                  Upload Module
                </CardTitle>
                <CardDescription>Drag & drop your module files</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground mb-4">
                    Drag files here or click to browse
                  </p>
                  <Button>Choose Files</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub Integration
                </CardTitle>
                <CardDescription>Sync directly from your repository</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full">
                  <Github className="h-4 w-4 mr-2" />
                  Connect GitHub
                </Button>
                <div className="text-sm text-muted-foreground">
                  <p>Benefits of GitHub sync:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Automatic deployment on push</li>
                    <li>Version control integration</li>
                    <li>Collaborative development</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Token Rewards Estimator</CardTitle>
              <CardDescription>
                Estimate your potential PPT earnings based on module type and quality
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-green-600">2,500 PPT</div>
                  <div className="text-sm text-muted-foreground">High-Quality Tool</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">5,000 PPT</div>
                  <div className="text-sm text-muted-foreground">Verified Skill</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">10,000 PPT</div>
                  <div className="text-sm text-muted-foreground">Premium Module</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="modules" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Text Analysis Pro</CardTitle>
                    <CardDescription>NLP Tool • v1.2.0</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Play className="h-4 w-4 mr-1" />
                      Test
                    </Button>
                    <Button size="sm">Deploy</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="font-semibold">Status</div>
                    <div className="text-sm text-green-600">Live</div>
                  </div>
                  <div>
                    <div className="font-semibold">Downloads</div>
                    <div className="text-sm">1,234</div>
                  </div>
                  <div>
                    <div className="font-semibold">Rating</div>
                    <div className="text-sm">4.8/5</div>
                  </div>
                  <div>
                    <div className="font-semibold">Revenue</div>
                    <div className="text-sm">15,430 PPT</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Total Downloads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">3,456</div>
                <div className="text-sm text-green-600">+12% this month</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Average Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">4.7</div>
                <div className="text-sm text-muted-foreground">Across all modules</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Active Modules</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">8</div>
                <div className="text-sm text-blue-600">2 pending review</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="earnings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Earnings Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary">45,230 PPT</div>
                  <div className="text-sm text-muted-foreground">Total Earned</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">2,340 PPT</div>
                  <div className="text-sm text-muted-foreground">This Month</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}