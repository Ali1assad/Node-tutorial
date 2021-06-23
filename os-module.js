const os = require('os')

// info about current user
const user = os.userInfo()



// method returns the system info
const osInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    osUpTime: os.uptime() 
}

console.log(osInfo);


