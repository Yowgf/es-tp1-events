#!/bin/bash
#
# Checks for listeners on some ports
################################################################################

ports='8000,8080'

echo "Checking for listeners on ports ${ports}"
lsof -i :"${ports}"
echo "Done"
