#!/bin/bash
#
# Checks for listeners on some ports
################################################################################

ports='3000,3001,8000'

echo "Checking for listeners on ports ${ports}"
lsof -i :"${ports}"
echo "Done"
