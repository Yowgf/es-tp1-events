#!/bin/bash
#
# This script deploys all servers we have
################################################################################

set -e

apiServerPort=8000
frontendDir=frontend
apiServerDir=api-server
tempLogPath=temp-log

[ -d "${tempLogPath}" ] || mkdir "${tempLogPath}"

# Spin frontend -- port 3000
# then -> Spin BFF (proxy) -- port 3001
npm run --prefix "${frontendDir}" start > "${tempLogPath}"/frontend.log 2>&1 &
npm run --prefix "${frontendDir}" server > "${tempLogPath}"/bff.log 2>&1 &

# Spin apiServer
python3 -m venv venv
. venv/bin/activate
FLASK_APP="${apiServerDir}" flask run --port "${apiServerPort}" > "${tempLogPath}"/apiServer.log 2>&1 &
