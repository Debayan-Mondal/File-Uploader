# File-Uploader
A stripped down version of google-drive.

**Clone the repository**
```bash
curl -sL https://deb.nodesource.com/setup_16.x|sudo -E bash -
sudo apt install nodejs 
```


**Script for Execution**
```bash
#!/bin/bash
apt-get update
apt-get install -y nginx
systemctl start nginx
systemctl enable nginx
apt-get install -y git
sudo curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs
git clone https://github.com/Debayan-Mondal/aws-repo.git
cd aws-repo
npm install
node index.js
```
```bash
while(true)
do
  echo "Inside Loop"
done
```
```bash
sudo chmod +x debayan.sh
```
