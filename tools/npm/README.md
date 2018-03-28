# NPM
NPM (Node package manager) is used to manage project/application dependencies.

NPM is based on packages and modules. Modules is a specific file or bench of related files, which could be imported via `require()` command in Node.js.

Module and package definitions by NPM guide:
- A package is a file or directory that is described by a package.json. This can happen in a bunch of different ways!
- A module is any file or directory that can be loaded by Node.js' require().

# Installation
Included in node.js. Use [nvm](https://github.com/creationix/nvm) to install node.js.

# NPM CLI

1. `$ npm install npm@latest -g` for updating npm to the latest version.
2. `$ npm init` to initialize project.
3. `$ npm install <package_name>` to install package in directory.
Use `-g` key to install globally.
Use `i` ally instead of `install` to shortcut.
Use `-S` or `--save`, `-D` or `--save-dev` key to mention dependency in `package.json`.
4. `$ npm update` to update local packages.
5. `$ npm uninstall <package_name>` to uninstall package locally. Use same syntax as for `i`. Use `rm` or `r` allies to shortcut.
6. `$ npm prune` delete all packages, which are not in `packages.json`.
7. `$ npm ls` show dependencies tree. Keys: `-g`, `--depth=0`.
8. `$ npm config get prefix` shows the locations where the global modules are storing.
9. `$ npm outdated` shows outdated packages. Keys: `-g`, `--depth=0`.

**Semantic Versioning**


Code status | Stage | Rule | Example
--- | --- | --- | ---
First Release | New Product | Start with 1.0.0 | 1.0.0
Bug fixes, other minor changes | Patch Release | Increment the third digit | 1.0.1
New Features that don't break existing features | Minor realeas | Increment the middle digit | 1.1.0
Changes that break backward compatibility | Major release | Increment the first digit | 2.0.0

Use npm dist-tag to specify version (0.0.1, 0.0.x, 0.x.1, x.0.1) in installing command: `npm i <package_name>@<version>`;

Also works:

Stage | Syntax
--- | ---
Patch releases: | 1.0 or 1.0.x or ~1.0.4
Minor releases: | 1 or 1.x or ^1.0.4
Major releases: | * or x
