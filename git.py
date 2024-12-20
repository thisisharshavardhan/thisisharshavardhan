import os
from datetime import datetime, timedelta

# Set the repository path (change this to your local Git repo)
repo_path = "."

# Set the number of days to make commits
days = 300  # For the past 30 days

# Navigate to the repository path
os.chdir(repo_path)

# Create a dummy file to track changes
file_name = "dummy_file.txt"

# Start committing changes
today = datetime.today()
for i in range(days):
    # Calculate the date for the commit
    commit_date = today - timedelta(days=i)
    formatted_date = commit_date.strftime("%Y-%m-%d %H:%M:%S")

                # Modify the dummy file
    with open(file_name, "a") as file:
        file.write(f"Commit for {formatted_date}\n")

                                # Stage the changes
    os.system("git add .")

                                        # Make a commit with the desired date
    os.system(f'git commit --date="{formatted_date}" -m "Automated commit for {formatted_date}"')

                                            # Push changes to GitHub
    os.system("git push origin main")