import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

export default function AgentCreator() {
  const [agentName, setAgentName] = useState('');
  const [agentRole, setAgentRole] = useState('');
  const [agentGoal, setAgentGoal] = useState('');
  const { toast } = useToast();

  const handleCreateAgent = () => {
    if (agentName && agentRole && agentGoal) {
      // Here you would typically send this data to your backend
      console.log({ agentName, agentRole, agentGoal });
      toast({
        title: 'Agent Created',
        description: `${agentName} has been added to your crew.`,
      });
      setAgentName('');
      setAgentRole('');
      setAgentGoal('');
    } else {
      toast({
        title: 'Error',
        description: 'Please fill in all fields.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Create New Agent</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="agent-name">Agent Name</Label>
          <Input
            id="agent-name"
            placeholder="Enter agent name"
            value={agentName}
            onChange={(e) => setAgentName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="agent-role">Role</Label>
          <Input
            id="agent-role"
            placeholder="Enter agent role"
            value={agentRole}
            onChange={(e) => setAgentRole(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="agent-goal">Goal</Label>
          <Textarea
            id="agent-goal"
            placeholder="Enter agent goal"
            value={agentGoal}
            onChange={(e) => setAgentGoal(e.target.value)}
          />
        </div>
        <Button onClick={handleCreateAgent}>Create Agent</Button>
      </div>
    </div>
  );
}