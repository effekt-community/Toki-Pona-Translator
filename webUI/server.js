const http = require("http");
const fs = require("fs");
const path = require("path");
const { parse } = require("querystring");
const { exec } = require("child_process");  // for .bat files

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        if (req.url === "/" || req.url === "/index.html") {
            fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Internal Server Error");
                } else {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.end(data);
                }
            });
        } else if (req.url === "/get-text") {
            fs.readFile("data.txt", "utf-8", (err, data) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Error reading file");
                } else {
                    res.writeHead(200, { "Content-Type": "text/plain" });
                    res.end(data);
                }
            });
        }
    } else if (req.method === "POST" && req.url === "/save") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const formData = parse(body);
            const text = formData.inputText + "\n";
            fs.writeFile("data.txt", text, (err) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Error saving data");
                } else {
                    res.writeHead(200, { "Content-Type": "text/plain" });
                    res.end("Data saved successfully! (File overwritten)");
                }
            });
        });
    } else if (req.method === "POST" && req.url === "/modify-text") {
        exec("main.bat", (err, stdout, stderr) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end(`Error executing .bat file: ${stderr}`);
                return;
            }
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(stdout);
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});