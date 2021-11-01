#!/bin/bash
#
# This application helps get the logs for some server
################################################################################

serverName=$1
tempLogDir='temp-log'
tac "${tempLogDir}/${serverName}.log" | less
