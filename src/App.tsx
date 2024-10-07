import { useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import CrewsView from '@/components/CrewsView';
import DeployView from '@/components/DeployView';

function App() {
  const [activeView, setActiveView] = useState('crews');

  return (
    <ThemeProvider defaultTheme="light" storageKey="crewai-theme">
      <div className="flex h-screen bg-gray-100">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
            {activeView === 'crews' && <CrewsView />}
            {activeView === 'deploy' && <DeployView />}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;