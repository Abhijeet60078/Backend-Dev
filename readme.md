MODULE 8: PRACTICAL EXERCISES

Exercise 1: Basic Git Workflow

Create a new directory and initialize Git

mkdir git-practice
cd git-practice
git init


Create a README.md file

echo "My Git Practice" > README.md


Add and commit the file

git add README.md
git commit -m "Add README file"


Make changes and commit again

echo "Learning Git basics" >> README.md
git add README.md
git commit -m "Update README with content"


View commit history

git log


Exercise 2: Branching and Merging

Create a new branch called “feature”

git branch feature
git checkout feature


Add new files in the feature branch

touch feature.txt
git add feature.txt
git commit -m "Add feature file"


Switch back to main branch

git checkout main


Merge feature branch into main

git merge feature


Delete the feature branch

git branch -d feature


Exercise 3: Conflict Resolution

Create two branches from main

git checkout -b branch1
git checkout main
git checkout -b branch2


Modify the same line in a file in both branches

# In branch1
echo "Change from branch1" > conflict.txt
git add conflict.txt
git commit -m "Branch1 change"

# In branch2
echo "Change from branch2" > conflict.txt
git add conflict.txt
git commit -m "Branch2 change"


Merge one branch into main

git checkout main
git merge branch1


Attempt to merge the second branch

git merge branch2


Resolve the conflict manually

# Edit conflict.txt manually
git add conflict.txt
git commit -m "Resolve merge conflict"


Exercise 4: GitHub Collaboration

Fork a sample repository on GitHub
(Use GitHub website → Fork button)

Clone it to your local machine

git clone <forked-repo-url>
cd repository-name


Create a new branch

git checkout -b new-feature


Make changes and push to your fork

git add .
git commit -m "Add new feature"
git push origin new-feature


Create a pull request to the original repository
(Use GitHub website → New Pull Request)

Exercise 5: Advanced Workflow

Initialize a repository with multiple files

git init
touch file1.txt file2.txt
git add .
git commit -m "Initial commit"


Create a .gitignore file

echo "node_modules/" > .gitignore
git add .gitignore
git commit -m "Add gitignore file"


Use git stash to save work in progress

git stash


Create and tag a release

git tag v1.0


Push everything to GitHub including tags

git push origin main
git push origin --tags
