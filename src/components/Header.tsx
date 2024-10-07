import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="bg-white border-b h-16 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <img src="/github-logo.png" alt="GitHub Logo" className="h-6" />
        <h2 className="text-lg font-semibold">Deploy your crews from Github</h2>
      </div>
      <Button variant="ghost" size="icon">
        <Settings className="h-5 w-5" />
        <span className="sr-only">Settings</span>
      </Button>
    </header>
  );
}