@echo off
setlocal enabledelayedexpansion

:: Get the directory of the batch file
set "SCRIPT_DIR=%~dp0"

:: Remove trailing backslash
set "SCRIPT_DIR=%SCRIPT_DIR:~0,-1%"

node %SCRIPT_DIR%/main__main.js %*