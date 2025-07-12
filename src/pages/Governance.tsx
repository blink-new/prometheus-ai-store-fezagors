import { Shield, CheckCircle, XCircle, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function Governance() {
  const pendingReviews = [
    {
      id: 'security-bot-v2',
      name: 'Security Bot v2.0',
      type: 'Skill',
      developer: 'SecureAI Labs',
      submittedAt: '2024-01-15',
      riskLevel: 'Medium',
      description: 'Advanced security monitoring for robotic systems'
    },
    {
      id: 'home-cleaner',
      name: 'Autonomous Home Cleaner',
      type: 'Skill', 
      developer: 'CleanBot Inc.',
      submittedAt: '2024-01-14',
      riskLevel: 'High',
      description: 'Intelligent cleaning routines with obstacle avoidance'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Governance & Moderation</h1>
        <p className="text-muted-foreground">
          Review and moderate Skills (robotics modules) for safety and security compliance
        </p>
      </div>

      <Tabs defaultValue="queue" className="space-y-6">
        <TabsList>
          <TabsTrigger value="queue">Review Queue</TabsTrigger>
          <TabsTrigger value="dashboard">Safety Dashboard</TabsTrigger>
          <TabsTrigger value="logs">Test Logs</TabsTrigger>
          <TabsTrigger value="history">Review History</TabsTrigger>
        </TabsList>

        <TabsContent value="queue" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Clock className="h-8 w-8 text-yellow-600 mr-3" />
                  <div>
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-sm text-muted-foreground">Pending</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                  <div>
                    <div className="text-2xl font-bold">45</div>
                    <div className="text-sm text-muted-foreground">Approved</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <XCircle className="h-8 w-8 text-red-600 mr-3" />
                  <div>
                    <div className="text-2xl font-bold">8</div>
                    <div className="text-sm text-muted-foreground">Rejected</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <AlertTriangle className="h-8 w-8 text-orange-600 mr-3" />
                  <div>
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-sm text-muted-foreground">High Risk</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {pendingReviews.map((review) => (
              <Card key={review.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center">
                        {review.name}
                        <Badge 
                          variant="secondary" 
                          className={
                            review.riskLevel === 'High' 
                              ? 'ml-2 bg-red-100 text-red-800' 
                              : review.riskLevel === 'Medium'
                              ? 'ml-2 bg-yellow-100 text-yellow-800'
                              : 'ml-2 bg-green-100 text-green-800'
                          }
                        >
                          {review.riskLevel} Risk
                        </Badge>
                      </CardTitle>
                      <CardDescription>
                        {review.type} • {review.developer} • Submitted {review.submittedAt}
                      </CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600">
                        <XCircle className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                      <Button size="sm" className="text-green-600">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{review.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="font-semibold">Security Scan</div>
                      <div className="text-green-600">✓ Passed</div>
                    </div>
                    <div>
                      <div className="font-semibold">Code Review</div>
                      <div className="text-yellow-600">⚠ In Progress</div>
                    </div>
                    <div>
                      <div className="font-semibold">Safety Test</div>
                      <div className="text-gray-600">⏳ Pending</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="dashboard" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Safety Checklist Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Automated Checks</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Code Vulnerability Scan</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Hardware Compatibility</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">API Boundary Check</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Manual Reviews</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Safety Protocol Review</span>
                      <Badge variant="secondary">Required</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Ethical Guidelines</span>
                      <Badge variant="secondary">Required</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Privacy Compliance</span>
                      <Badge variant="secondary">Required</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Simulated Attack/Test Logs</CardTitle>
              <CardDescription>
                Automated security testing results for submitted modules
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 font-mono text-sm">
                <div className="bg-muted/50 p-4 rounded">
                  <div className="text-green-600">[PASS] Buffer overflow test - No vulnerabilities detected</div>
                  <div className="text-green-600">[PASS] SQL injection test - Input sanitization working</div>
                  <div className="text-yellow-600">[WARN] Rate limiting - Potential DoS vulnerability</div>
                  <div className="text-red-600">[FAIL] Memory leak test - Memory not properly freed</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Review History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border rounded">
                  <div>
                    <div className="font-semibold">Garden Care AI v1.5</div>
                    <div className="text-sm text-muted-foreground">Reviewed by Admin on 2024-01-14</div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Approved</Badge>
                </div>
                <div className="flex justify-between items-center p-4 border rounded">
                  <div>
                    <div className="font-semibold">Security Guard Bot</div>
                    <div className="text-sm text-muted-foreground">Reviewed by Admin on 2024-01-13</div>
                  </div>
                  <Badge className="bg-red-100 text-red-800">Rejected</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}