# File-Uploader
A stripped down version of google-drive.

**Clone the repository**
**7**
```bash
sudo apt install nginx 
```

```bash
cd /var/www
sudo chmod 777 html/ 
```
**8**
```bash
git init
git config --global user.name "Debayan"
git config --global user.email "debayanwb17@gmail.com"
git remote add origin <url>
git branch -M main -u origin main
git push -u origin main 
```
**9**
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
**11**
```bash
while(true)
do
  echo "Inside Loop"
done
```
**11**
```bash
sudo chmod +x debayan.sh
sh debayan.sh
```
**12**
```bash
cd/
cd etc/nginx/sites-available
sudo vim default
```
```bash
location / {
    # First attempt to serve request as file, then
    # as directory, then fall back to displaying a 404.
    #try_files $uri $uri/ =404;

    proxy_pass http://localhost:4000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'Upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```
```bash
sudo chmod +x default
sudo systemctl restart nginx
sudo systemctl enable nginx
```
