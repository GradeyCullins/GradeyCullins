#!/usr/bin/env bash

ssh -p 2222 gb@10.0.0.199 << 'ENDSSH'
  cd ~/Repositories/gradeycullins.com
  git pull
  cd ~/Repositories/server
  docker compose up -d --force-recreate --build gradeycullins-com
ENDSSH