import { Folder, FileText, Link, PenTool, LayoutDashboard, Database } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export default function Sidebar({ activeView, setActiveView }: SidebarProps) {
  const menuItems = [
    { id: 'crews', icon: Folder, label: 'Crews' },
    { id: 'templates', icon: FileText, label: 'Templates' },
    { id: 'integrations', icon: Link, label: 'Integrations' },
    { id: 'ui-studio', icon: PenTool, label: 'UI Studio' },
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'storage', icon: Database, label: 'Storage' },
  ];

  return (
    <div className="w-64 bg-white border-r">
      <div className="flex h-16 items-center px-4">
        <img src="/crewai-logo.png" alt="CrewAI Logo" className="h-8" />
      </div>
      <nav className="space-y-2 p-4">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            className={cn(
              'w-full justify-start',
              activeView === item.id && 'bg-gray-100'
            )}
            onClick={() => setActiveView(item.id)}
          >
            <item.icon className="mr-2 h-5 w-5" />
            {item.label}
          </Button>
        ))}
      </nav>
      <div className="absolute bottom-4 left-4 right-4">
        <Button variant="destructive" className="w-full">
          Logout
        </Button>
      </div>
    </div>
  );
}