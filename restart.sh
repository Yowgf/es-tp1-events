#!/bin/bash
#
# Pipes together teardown + deploy + check_server
################################################################################

./teardown.sh
./deploy.sh
sleep 2s
./check_servers.sh
