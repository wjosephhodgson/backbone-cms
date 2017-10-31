How to get started with the build environment
===============================================================================
1. Install node.  If Windows, make sure that it is added to the PATH so npm can
be called from the terminal

2. 'cd' to top level directory (esat-html/).  This is the directory containing
all our code and will contain the package.json file

3. Run 'npm install' in the terminal

4. After that's finished, run 'npm install -g gulp' to allow 'gulp' to be used
in the terminal

5. Run 'gulp' in the to start our build tasks and watcher.  By default, the
page will be run on localhost:3000

How to compile project for production
===============================================================================
1. Make sure node is installed.  Go to top level directory for project and
run 'node r.js -o build.js' in terminal (this may take a while)

2. Switch index.html script loading in head to load 'bundle.js' instead of
require.js with data-main

During development, if any changes are made which involve adding a new page
or re-routing the location of a page (content-view-map,
category-section-view-map, menu-view-map), make sure that it is done in
those files and the *-dev ones, following the conventions in the respective
files