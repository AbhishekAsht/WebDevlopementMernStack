<!-- Package.json -->
What your project needs (dependencies).
How to run your project (scripts).
Basic details about your project (name, version, description).

Why It’s Important:
For consistency: When other people or you work on the project in the future, package.json ensures you all use the same version of the tools.
For easy setup: Instead of installing each package manually, npm install looks at package.json and automatically installs everything your project needs.

<!-- First initialize your project with npm init -->
<!-- These are the updates -->
MAJOR.MINOR.PATCH

1. Patch Version
Purpose: Bug fixes and patches that do not affect functionality or introduce breaking changes.
Changes: Fixes a small issue without adding new features.
Incremented: When backward-compatible bug fixes are made.

2. Minor Version
Purpose: Adds new features or improvements in a backward-compatible way (no breaking changes).
Changes: Introduces new functionality, but existing code will still work as before.
Incremented: When new, backward-compatible features are added.

3. Major Version
Purpose: Introduces significant changes, often with breaking changes that may require users to modify their code.
Changes: Makes fundamental changes to the library, removing or changing functionality in a way that is not backward-compatible.
Incremented: When breaking changes are introduced.

caret: ^ (minor and patch)
tilde: ~(patch)

Bring Bundler to our app:
webpack
vite
parcel
<!-- npm install -D parcel -->

Role of bundler:
1: Combines Multiple Files:
Your code might be spread across many files (e.g., multiple JavaScript modules, CSS files, images). A bundler collects all of these files, combines them, and creates one (or more) output files that the browser can efficiently load.
2: Optimizes for Performance: Minification: Removing unnecessary spaces, comments, and shortening variable names.
Tree Shaking: Removing unused code from the final bundle, so only the parts of your code that are used are included.
Code Splitting: Breaking your code into smaller pieces (chunks) so that the browser only loads what is needed for the initial page load and can load other parts of the app on demand.
3: Handles Dependencies:
4: Transpiles Code:

<!-- npx parcel index.html -->
<!-- npx parcel build index.html -->



<!-- npm install react
npm install react-dom -->

import React from "react";
import ReactDOM from "react-dom/client";