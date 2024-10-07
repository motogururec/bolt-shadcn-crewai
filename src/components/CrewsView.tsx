import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function CrewsView() {
  const [studioCrews, setStudioCrews] = useState([]);
  const [crewDescription, setCrewDescription] = useState('');

  return (
    <div className="grid grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Studio Crews</CardTitle>
        </CardHeader>
        <CardContent>
          {studioCrews.length === 0 ? (
            <p>No Studio Crews created yet</p>
          ) : (
            // Render studio crews here
            <p>Studio crews will be listed here</p>
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Configure your Crew</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Crew Assistant</h3>
              <h4 className="font-medium mb-2">Agents</h4>
              {/* Add agent configuration here */}
            </div>
            <div>
              <h4 className="font-medium mb-2">Tasks</h4>
              {/* Add task configuration here */}
            </div>
            <Textarea
              placeholder="Describe what you are trying to accomplish and what kind of automation you want to build."
              value={crewDescription}
              onChange={(e) => setCrewDescription(e.target.value)}
              rows={4}
            />
            <Button className="w-full">Generate Crew Plan</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}