const fs = require('fs')

const logsDir = './logs';
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

//define the time format
function getTime() {
    let now = new Date();
    return now.toUTCString();
}

function doLog(line, level='Debug') {
    line = `${getTime()} - ${level} - ${line}\n` 
    console.log(line);
    fs.appendFileSync('./logs/backend.log',line);
}

module.exports = {
    debug(line){
        doLog(line, "Debug")
    },
    info(line){
        doLog(line, "Info")
    },
    warn(line){
        doLog(line, "Warn")
    },
    error(line){
        doLog(line, "Error")
    }
}