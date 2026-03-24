sudo apt update

curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -

sudo apt install -y nodejs

node -v
npm -v

git clone https://github.com/KRATISH07/aws-dynamic.git

cd aws-dynamic

npm install

node server.js

ps aux | grep node

curl http://localhost:3000
