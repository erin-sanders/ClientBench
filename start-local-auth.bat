@echo off
REM Load environment variables from .env.swa
for /f "usebackq tokens=1,2 delims==" %%a in (".env.swa") do (
    if not "%%a"=="" if not "%%a:~0,1%"=="#" set %%a=%%b
)

REM Start SWA CLI with local config
swa start http://localhost:5173 --run "npm run dev" --swa-config-location ./staticwebapp.config.local.json
