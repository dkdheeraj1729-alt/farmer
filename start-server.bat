@echo off
title Farmer Connect Portal Local Web Server
echo ====================================================================
echo Starting Farmer Connect Portal on http://localhost:5500 ...
echo ====================================================================
echo.
start "" "http://localhost:5500"
"C:\Program Files\Python311\python.exe" -m http.server 5500
pause
