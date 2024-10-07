import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Users, MoreVertical, Copy } from 'lucide-react';

export default function DeployView() {
  const [repository, setRepository] = useState('');
  const [crews, setCrews] = useState([
    { name: 'Lead Enrichment Crew', url: 'https://lead-enrichment-816b9664-9f6...', token: '6f636aec8b16' },
    { name: 'Customer Support Crew', url: 'https://customer-support-17eb5eea...', token: '55dbbc294ba7' },
    // Add more crews as needed
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-2">Ready to deploy your project? Select a GitHub repository to deploy.</h2>
        <div className="flex space-x-2">
          <Input
            placeholder="Select a repository"
            value={repository}
            onChange={(e) => setRepository(e.target.value)}
          />
          <Button>Add Environment Variable</Button>
          <Button>Bulk Environment Variables</Button>
        </div>
        <Button className="w-full mt-2 bg-gray-900 text-white hover:bg-gray-800">Deploy</Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {crews.map((crew, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <h3 className="font-semibold">{crew.name}</h3>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium">URL</p>
                  <div className="flex items-center">
                    <Input value={crew.url} readOnly className="text-red-500 text-xs" />
                    <Button variant="ghost" size="icon" className="ml-1">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">Bearer Token</p>
                  <div className="flex items-center">
                    <Input value={crew.token} readOnly className="text-red-500 text-xs" />
                    <Button variant="ghost" size="icon" className="ml-1">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button className="flex-1" variant="secondary">Re-deploy</Button>
                  <Button className="flex-1" variant="destructive">Delete</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}