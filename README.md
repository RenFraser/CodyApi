# README

## Install

Add the following to your `~/.npmrc` file. 
Replace `TOKEN` with your PAT.

```text
@renfraser:registry=https://npm.pkg.github.com/:_authToken=TOKEN
```

Authenticate with GitHub.

```shell
gh auth login
```

Install the packages.

```shell
npm install
```