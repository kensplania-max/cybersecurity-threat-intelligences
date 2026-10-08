function checkIP() {
    // Get the IP address from the input
    const ipInput = document.getElementById("ipInput");
    const status = document.getElementById("status");

    const ip = ipInput.value.trim();

    // Check if the input is empty
    if (ip === "") {
        status.className = "malicious";
        status.textContent = "Please enter an IP address.";
        return;
    }

    // Basic IPv4 validation
    const ipPattern =
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (!ipPattern.test(ip)) {
        status.className = "malicious";
        status.textContent = "Invalid IP address. Please enter a valid IPv4 address.";
        return;
    }

    // Display checking message
    status.className = "";
    status.textContent = "Checking IP address...";

    // Demo threat intelligence result
    setTimeout(function () {
        let result;
        let resultClass;

        /*
         * Demo data for testing the dashboard.
         * This is NOT a real threat intelligence lookup yet.
         */

        if (ip === "8.8.8.8" || ip === "1.1.1.1") {
            result = `IP Address: ${ip} | Status: Safe | Threat Level: Low`;
            resultClass = "safe";
        } else if (
            ip === "192.168.1.1" ||
            ip === "127.0.0.1"
        ) {
            result = `IP Address: ${ip} | Status: Suspicious | Threat Level: Medium`;
            resultClass = "suspicious";
        } else {
            result = `IP Address: ${ip} | Status: No known threat detected | Threat Level: Low`;
            resultClass = "safe";
        }

        status.className = resultClass;
        status.textContent = result;
    }, 800);
}
