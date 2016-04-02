# Lazygit
Lazifies your usual git cycle: `git add` + `git commit` + `git push`

## Usage
To symlink to ``/usr/local/bin`` (optional):
```
lazygit setup
```
Lazygit will ask if you want to setup. If you want to use `setup` as your commit message, enter `n`.

To git add current directory, commit with message, and push to remote:
```
lazygit [commit message] [remote]
````
Commit message cannot be blank. If no remote specified, lazygit will push to master.
