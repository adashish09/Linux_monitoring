import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NetworkMonitor = () => {
    const [networkData, setNetworkData] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('/api/network-monitor');
                setNetworkData(result.data);
            } catch (error) {
                console.error("Error fetching network data:", error);
            }
        };

        // Fetch data initially and then every 5 seconds
        fetchData();
        const interval = setInterval(fetchData, 5000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>Network Monitor</h2>
            <pre>{networkData}</pre>
        </div>
    );
};

export default NetworkMonitor;
