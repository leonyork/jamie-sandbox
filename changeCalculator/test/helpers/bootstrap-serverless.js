const { spawn } = require('child_process');

let slsOfflineProcess;

before(function(done) {
    this.timeout(30000);

    console.log("[Tests Bootstrap] Start");
    startSlsOffline(function(err) {
        if (err) {
            return done(err);
        }

        console.log("[Tests Bootstrap] Done");
        done();
    })
});

after(function() {
    console.log("[Tests Teardown] Start");

    stopSlsOffline();

    console.log("[Tests Teardown] Done");
});

function startSlsOffline(done) {
    slsOfflineProcess = spawn("sls", ["offline", "start", "--port", getSlsOfflinePort()]);

    console.log(`Serverless: Offline started with PID : ${slsOfflineProcess.pid}`);

    slsOfflineProcess.stdout.on('data', (data) => {
        if (data.includes("Offline listening on")) {
            console.log(data.toString().trim());
            done();
        }
    });

    slsOfflineProcess.stderr.on('data', (errData) => {
        console.log(`Error starting Serverless Offline:\n${errData}`);
        done(errData);
    });
}

function stopSlsOffline() {
    slsOfflineProcess.kill();
    console.log("Serverless Offline stopped");
}

function getSlsOfflinePort() {
    return 3000;
}

module.exports.getSlsOfflinePort = getSlsOfflinePort;