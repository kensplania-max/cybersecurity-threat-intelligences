function checkIP() {
    const ipInput = document.getElementById("ipInput");
    const status = document.getElementById("status");

    const ipResult = document.getElementById("ipResult");
    const statusResult = document.getElementById("statusResult");
    const threatResult = document.getElementById("threatResult");

    const ip = ipInput.value.trim();

    // Check if empty
    if (ip === "") {
        status.textContent = "Please enter an IP address.";

        ipResult.textContent = "---";
        statusResult.textContent = "Invalid";
        threatResult.textContent = "---";

        statusResult.className = "malicious";
        threatResult.className = "";

        return;
    }

    // Basic IPv4 validation
    const ipPattern =
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (!ipPattern.test(ip)) {
        status.textContent =
            "Invalid IP address. Please enter a valid IPv4 address.";

        ipResult.textContent = "---";
        statusResult.textContent = "Invalid";
        threatResult.textContent = "---";

        statusResult.className = "malicious";
        threatResult.className = "";

        return;
    }

    // Show checking message
    status.textContent = "Checking IP address...";

    ipResult.textContent = ip;
    statusResult.textContent = "Checking...";
    threatResult.textContent = "...";

    // Demo result
    setTimeout(function () {
        let resultStatus;
        let threatLevel;
        let resultClass;

        if (ip === "8.8.8.8" || ip === "1.1.1.1") {
            resultStatus = "Safe";
            threatLevel = "Low";
            resultClass = "safe";
        } else if (ip === "192.168.1.1" || ip === "127.0.0.1") {
            resultStatus = "Suspicious";
            threatLevel = "Medium";
            resultClass = "suspicious";
        } else {
            resultStatus = "No Known Threat";
            threatLevel = "Low";
            resultClass = "safe";
        }

        status.textContent =
            "IP address analysis completed.";

        ipResult.textContent = ip;
        statusResult.textContent = resultStatus;
        threatResult.textContent = threatLevel;

        statusResult.className = resultClass;
        threatResult.className = resultClass;
    }, 800);
}
