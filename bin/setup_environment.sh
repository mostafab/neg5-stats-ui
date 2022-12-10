#!/bin/bash

set -e

nvm_script_location='https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh'

cd $(dirname "$0")
cd ../
node_version=$(cat .nvmrc)

curl -o- $nvm_script_location | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

nvm install "v${node_version}"

yarn install
cd react-ui
yarn install



