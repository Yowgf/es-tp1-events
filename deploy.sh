#!/bin/bash
#
# This script deploys all servers we have
################################################################################

serverPort=8000
clientDir=client
serverDir=server
tempLogPath=temp-log

[ -d "${tempLogPath}" ] || mkdir "${tempLogPath}"

# Spin client
npm run --prefix "${clientDir}" dev > "${tempLogPath}"/client.log 2>&1 &

# Spin server
python3 -m venv venv
. venv/bin/activate
FLASK_APP="${serverDir}" flask run --port "${serverPort}" > "${tempLogPath}"/server.log 2>&1 &
