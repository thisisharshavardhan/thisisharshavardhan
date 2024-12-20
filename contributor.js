const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Path to your repository (Codespaces will automatically clone the repo)
const repoPath = "/workspaces/thisisharshavardhan"; // Update this with your repo name

// Number of days to create commits
const days = 30;

// Navigate to the repository
process.chdir(repoPath);

// File to modify for commits
const fileName = path.join(repoPath, "dummy.txt");

// Current date
const today = new Date();

for (let i = 0; i < days; i++) {
  // Calculate the commit date
    const commitDate = new Date();
      commitDate.setDate(today.getDate() - i);

        // Format the date for Git
          const formattedDate = commitDate.toISOString();

            // Write to the dummy file
              fs.appendFileSync(fileName, `Commit on ${formattedDate}\n`);

                // Stage the changes
                  execSync("git add .");

                    // Commit with a specific date
                      execSync(`git commit --date="${formattedDate}" -m "Commit on ${formattedDate}"`, { stdio: "inherit" });
                      }

                      // Push changes to GitHub (make sure the branch is correct)
                      execSync("git push origin main", { stdio: "inherit" });

                      console.log("Commits created and pushed!");