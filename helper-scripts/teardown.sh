#!/bin/bash
#
# This script brings down our servers. Use with caution, it is quite rudimentary
# (uses the plain killall command)
################################################################################

killall python3
killall node
