# Lazyscripts
Scripts to do normal things for lazy people

> Note: There are bugs. I'm working on it.

## Lazygit
Tired of the holy trinity of `git add` `git commit` `git push`?
This *tries* to make that simpler. 

### Usage
To symlink to ``/usr/local/bin`` (optional):
```
lazygit setup
```
Lazygit will ask if you want to setup. If you want to use `setup` as your commit message, enter `n`.

To git add current directory, commit with message, and push to remote:
```
lazygit [commit message] [remote]
````
Commit message cannot be blank. If remote is blank, lazygit will push to master.
