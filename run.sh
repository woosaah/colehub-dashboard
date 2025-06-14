#crontab -e
*/5 * * * * cd /home/colle/colehub && /usr/bin/git pull >> /home/colle/git-sync.log 2>&1 && pkill -f "node index.js" && /usr/bin/node /home/colle/colehub/index.js >> /home/colle/node.log 2>&1


#Create/Enable service
sudo systemctl daemon-reexec
sudo systemctl enable colehub-server.service
sudo systemctl start colehub-server.service


#autostart
mkdir -p ~/.config/autostart
nano ~/.config/autostart/colehub-kiosk.desktop


[Desktop Entry]
Type=Application
Name=ColeHub Kiosk
Exec=chromium-browser --kiosk --app=http://localhost:3000
X-GNOME-Autostart-enabled=true

#executable update-colehub
chmod +x /home/colle/update-colehub.sh
