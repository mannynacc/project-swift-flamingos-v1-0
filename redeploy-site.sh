#!/bin/bash

cd ~/project-swift-flamingos-v1-0
git fetch && git reset origin/main --hard
source python3-virtualenv/bin/activate
pip3 install -r requirements.txt
systemctl restart myportfolio
systemctl status myportfolio
