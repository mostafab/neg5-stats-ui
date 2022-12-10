#!/bin/bash

set -e

nvm_script_location='https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh'
node_version="8.17.0"

cd $(dirname "$0")
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

nvm install "v${node_version}"
cd ../
nvm use $node_version
cd react-ui
nvm use $node_version

cd ../
yarn install
cd react-ui
yarn install



