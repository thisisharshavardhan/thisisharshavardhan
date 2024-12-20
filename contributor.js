const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const repoPath = "/workspaces/thisisharshavardhan"; // Update this
const fileName = path.join(repoPath, "dummy.txt");

process.chdir(repoPath);

for (let i = 0; i < 10; i++) {
  const date = new Date();
    date.setDate(date.getDate() - i); // Create commits for the last 10 days
      const formattedDate = date.toISOString();

        fs.appendFileSync(fileName, `Commit for ${formattedDate}\n`);
          execSync("git add .");
            execSync(`git commit --date="${formattedDate}" -m "Commit for ${formattedDate}"`);
            }

            execSync("git push origin main");