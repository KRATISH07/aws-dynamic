# 🚀 EC2 Setup Commands (Dynamic Attendance App)

# -------------------------------

# 1. Update system

# -------------------------------

sudo apt update

# -------------------------------

# 2. Install Node.js + npm

# -------------------------------

curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# -------------------------------

# 3. Verify installation

# -------------------------------

node -v
npm -v

# -------------------------------

# 4. Clone project from GitHub

# -------------------------------

git clone https://github.com/KRATISH07/dynamic-attendance.git
cd dynamic-attendance

# -------------------------------

# 5. Fix database filename

# -------------------------------

mv user.json users.json

# -------------------------------

# 6. Initialize Node project

# -------------------------------

npm init -y

# -------------------------------

# 7. Install dependencies

# -------------------------------

npm install express

# -------------------------------

# 8. Run the server

# -------------------------------

node server.js

# -------------------------------

# 9. (Optional) Keep server running permanently

# -------------------------------

sudo npm install -g pm2
pm2 start server.js
pm2 save
pm2 startup

# -------------------------------

# 10. Check if app is running

# -------------------------------

pm2 list

# -------------------------------

# 🌐 Open in browser:

# http://YOUR_PUBLIC_IP:3000

# -------------------------------

# -------------------------------

# 🧪 Debug commands (if needed)

# -------------------------------

ls
curl http://localhost:3000
ps aux | grep node
