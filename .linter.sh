#!/bin/bash
cd /home/kavia/workspace/code-generation/tictactoe-classic-34858-34863/main_container
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

