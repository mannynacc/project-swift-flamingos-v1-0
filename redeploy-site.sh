#!/bin/bash

sessname="flask"

tmux kill-server
cd ~/project-swift-flamingos-v1-0
git fetch && git reset origin/main --hard
source python3-virtualenv/bin/activate
pip3 install -r requirements.txt

tmux start-server
tmux new -d -s "$sessname"
tmux send-keys -t "$sessname" 'cd ~/project-swift-flamingos-v1-0' 'C-m'
tmux send-keys -t "$sessname" 'source python3-virtualenv/bin/activate' 'C-m'
tmux send-keys -t "$sessname" 'flask run --host=0.0.0.0' 'C-m'

tmux attach -t "$sessname"
