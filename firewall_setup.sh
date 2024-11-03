#!/bin/bash

# Check firewall status
if [ "$1" == "status" ]; then
    echo "Firewall Status:"
    sudo iptables -L
else
    echo "Invalid command. Use 'status' to check firewall status."
fi

