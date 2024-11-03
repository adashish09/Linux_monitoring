#!/bin/bash

# Continuously write network bandwidth usage and active connections to network_stats.txt
while true; do
    # Clear previous output
    echo "Network Monitoring Data:" > network_stats.txt
    echo "=========================" >> network_stats.txt
    
    # Capture network bandwidth usage
    echo "Network Bandwidth Usage (KB/s):" >> network_stats.txt
    ifstat -t -S 1 1 | tail -n +3 >> network_stats.txt
    
    # Capture active connections
    echo -e "\nActive Connections:" >> network_stats.txt
    echo "-------------------" >> network_stats.txt
    netstat -tunapl | grep -E 'tcp|udp' >> network_stats.txt
    
    # Update every 5 seconds
    sleep 5
done
