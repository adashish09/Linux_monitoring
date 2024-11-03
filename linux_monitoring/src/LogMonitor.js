import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LogMonitor = () => {
    const [logAlerts, setLogAlerts] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/log-monitor');
            setLogAlerts(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Log Monitor</h2>
            <pre>{logAlerts}</pre>
        </div>
    );
};

export default LogMonitor;
