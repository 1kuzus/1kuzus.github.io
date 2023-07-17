@echo off

if "%~1"=="" (
    echo miss 1 parameter.
    exit
)

cd ./src/component
mkdir %1
cd %1
type nul > %1.css
echo import React from 'react'; > %1.js
echo import './%1.css'; >> %1.js
echo. >> %1.js
echo export default function %1 () { >> %1.js
echo     return ( >> %1.js
echo         "%1" >> %1.js
echo     ); >> %1.js
echo } >> %1.js
