# Step-by-Step AWS EC2 Deployment Guide

This guide will walk you through exactly how to host your MERN application on a single AWS EC2 instance. Follow each step in order.

## Phase 1: Local Preparation

### 1. Push your Code to GitHub
Ensure all your local code is uploaded to a GitHub repository.
- **Important:** Do NOT commit your `.env` file. (Double check that it is in your `.gitignore`).

### 2. Prepare your Database
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create your cluster, user, and password.
3. Under **Network Access**, ensure you add the IP `0.0.0.0/0` so your AWS instance can connect to the database.
4. Copy the connection string. You'll need it later.

---

## Phase 2: Create the AWS Server

### 3. Launch an EC2 Instance
1. Go to your [AWS Management Console](https://console.aws.amazon.com/ec2).
2. Click **Instances** > **Launch instances**.
3. **Name:** `Portfolio-Web-Server`
4. **OS:** Select **Ubuntu** (Ubuntu Server 24.04 or 22.04 LTS).
5. **Instance Type:** Select `t2.micro` (This is free tier eligible).
6. **Key Pair:** Create a new key pair (e.g., `portfolio-key`). Download the `.pem` file to your Mac (typically to your `Downloads` folder).
7. **Network Settings:** 
   - Check `Allow SSH traffic from Anywhere`
   - Check `Allow HTTP traffic from the internet`
   - Check `Allow HTTPS traffic from the internet`
8. Click **Launch Instance**.

---

## Phase 3: Connect and Configure

### 4. Connect to Your Server (From your Mac Terminal)
Open a new terminal window on your Mac and type the following commands:
```bash
# Secure the downloaded key
chmod 400 ~/Downloads/portfolio-key.pem

# SSH into the server (Replace with your actual public IPv4 address from AWS)
ssh -i ~/Downloads/portfolio-key.pem ubuntu@YOUR_EC2_PUBLIC_IP
```
*Note: Type `yes` if prompted about host authenticity.*

### 5. Install Software
Once you are connected to the `ubuntu@ip-...` terminal, install Node.js, Nginx, and PM2:
```bash
# Update the system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install Nginx and PM2
sudo apt install -y nginx
sudo npm install -g pm2
```

---

## Phase 4: Download and Build

### 6. Clone your Repository
```bash
# Clone the code from GitHub
git clone https://github.com/your-username/your-repo-name.git portfolio

# Go into the directory
cd portfolio
```

### 7. Install and Build Files
```bash
# Install backend packages
cd server
npm install

# Return to root, then install frontend packages and build
cd ../client
npm install
npm run build

# Return to root
cd ..
```

---

## Phase 5: Start the App

### 8. Set up the Environment Variables
```bash
cd server
nano .env
```
Paste in your environment variables. It should look something like this:
```env
PORT=5001
MONGODB_URI=your_mongodatabase_string_here
FRONTEND_URL=http://YOUR_EC2_PUBLIC_IP
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```
Save the file by pressing `CTRL+O`, `Enter`, and `CTRL+X`.

### 9. Start the Node Server with PM2
```bash
# Go back to the portfolio root
cd ..

# Start the server using the ecosystem file I generated for you
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```
*(Copy the command that PM2 tells you to run at the very end to enable startup on boot).*

---

## Phase 6: Web Server Configuration (Nginx)

### 10. Configure Nginx
```bash
sudo nano /etc/nginx/sites-available/default
```
Delete everything in the file and paste this exactly:
```nginx
server {
    listen 80;
    server_name _; 

    # Serve React Static Files
    root /home/ubuntu/portfolio/client/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Proxy API requests to Node backend
    location /api/ {
        proxy_pass http://localhost:5001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
Save (`CTRL+O`, `Enter`) and Exit (`CTRL+X`).

### 11. Final Restart
```bash
sudo systemctl restart nginx
```

**Done!** Go to `http://YOUR_EC2_PUBLIC_IP` in your browser.
