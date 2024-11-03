import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FirewallStatus = () => {
    const [firewallStatus, setFirewallStatus] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/firewall-status');
            setFirewallStatus(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Firewall Status</h2>
            <pre>{firewallStatus}</pre>
        </div>
    );
};

export default FirewallStatus;
