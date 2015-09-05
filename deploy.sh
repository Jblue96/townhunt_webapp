#!/bin/sh
git checkout .
git pull
forever stopall
npm install
forever start -c "npm start" .
