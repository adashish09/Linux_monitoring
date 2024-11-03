const express = require('express');
const fs = require('fs');
const { exec } = require('child_process');

const app = express();
const PORT = 5000;

// API endpoint for Network Monitoring
// app.get('/api/network-monitor', (req, res) => {
//     exec('bash network_monitor.sh', (error, stdout, stderr) => {
//         if (error) return res.status(500).send(stderr);
//         res.send(stdout);
//     });
// });

app.get('/api/network-monitor', (req, res) => {
    fs.readFile('network_stats.txt', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading network_stats.txt:", err);
            return res.status(500).send("Error reading network data");
        }
        res.send(data);
    });
});

// API endpoint for Firewall Status
// app.get('/api/firewall-status', (req, res) => {
//     exec('bash firewall_setup.sh status', (error, stdout, stderr) => {
//         if (error) return res.status(500).send(stderr);
//         res.send(stdout);
//     });
// });

// API endpoint for Log Monitoring
// app.get('/api/log-monitor', (req, res) => {
//     fs.readFile('alerts.txt', 'utf8', (err, data) => {
//         if (err) return res.status(500).send("Error reading file");
//         res.send(data);
//     });
// });

app.get('/api/log-monitor', (req, res) => {
    fs.readFile('alerts.txt', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading alerts.txt:", err);
            return res.status(500).send("Error reading log file");
        }
        res.send(data);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
