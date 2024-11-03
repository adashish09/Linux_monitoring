import React from 'react';
import NetworkMonitor from './NetworkMonitor';
import FirewallStatus from './FirewallStatus';
import LogMonitor from './LogMonitor';

function App() {
    return (
        <div className="App">
            <h1>Linux Monitoring Dashboard</h1>
            <NetworkMonitor />
            {/* <FirewallStatus /> */}
            <LogMonitor />
        </div>
    );
}

export default App;
