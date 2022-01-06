#!/bin/bash
#
# This application helps get the logs for some server
################################################################################

tempLogDir='temp-log'
logFiles=`echo $tempLogDir/*.log`

select f in ${logFiles}; do
    if [[ $REPLY = 'quit' || $REPLY = 'exit' ]]; then
	exit 0
    fi
    cat "$f" | less
done
