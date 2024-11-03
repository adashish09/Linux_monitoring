#!/bin/bash

# Monitor syslog for error messages and append to alerts.txt
nohup tail -f /var/log/syslog | grep --line-buffered "error" >> alerts.txt &
