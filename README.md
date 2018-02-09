# karma-setup
Karma setup for angular 1

# Running Test
To run the test, navigate to the directory and run
```bash
npm test
```



Each paragraph begins on a new line. Simply press <return> for a new line.
 
For example, 
like this.
 
You'll need an empty line between a paragraph and any following markdown construct, 
such as an ordered or unordered list, for that to be rendered. Like this:
 
* Item 1
* Item 2

*Italic characters*
_Italic characters_
**bold characters**
__bold characters__
~~strikethrough text~~

> Neque porro quisquam est qui
> dolorem ipsum quia dolor sit amet,
> consectetur, adipisci velit...

```
This is a code block
```

```javascript
var oldUnload = window.onbeforeunload;
window.onbeforeunload = function() {
    saveCoverage();
    if (oldUnload) {
        return oldUnload.apply(this, arguments);
    }
};
```


This is [an example](http://www.slate.com/ "Title") inline link.
 
[This link](http://example.net/) has no title attribute.



```
├── _config.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.textile
|   └── on-simplicity-in-technology.markdown
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.textile
|   └── 2009-04-26-barcamp-boston-4-roundup.textile
├── _data
|   └── members.yml
├── _site
└── index.html
```






# Over The Counter UI
Over The Counter-The application provides trading reports based on Capital Markets data and Core Processing data. The application also updates trading and position master files for use by other downstream applications like AMB, BSK etc. End users would be IT and Operations.

  Language  |     MV* Library    |  Component Library  |     Theme(s) 
:----------:| :----------------: | :-----------------: |:--------------:
 JavaScript |    AngularJS 1     |      Bootstrap      |      IST

# OTC Local Setup
To setup the project locally these steps should be followed:

* Go to [OTC stash path](http://stashblue.ms.com:11990/atlassian-stash/projects/VIBE_OTCPQ_UI/repos/otcpq-ui/browse)
* Go to ```Sidebar > Clone , copy the highlighted path.``` [example] 
 (http://user@stashblue.ms.com:11990/atlassian-stash/scm/vibe_otcpq_ui/otcpq-ui.git)
* Clone the repository in local
* On completion ```Go to ‘src’ folder and Open terminal ```,then run 
> ms-grunt.bat
* Go to [this browser path](http://localhost.ms.com:8181/)

# Basic Code Structure Overview

To setup the project locally these steps should be followed:
A brief information about the code structure All the development code remains in ‘src’ folder, there are primary folders like- 

```
├── src/ This is the source folder
|   ├── main/ - It has all the functionality, styling and layout related files in structured folders i.e – 
|       ├── otc/ - This is the main folder where all the template files, js files(components and services etc) as well as congiguration files
|           ├── components/ - This folder contains various components used in the application.
|           ├── config/ - This folder contains the configuration files whereas the main files are -  
|               ├── otc.config.js - This file has all the configuration to be passed to the FAD framework for customising the application.
|               ├── otc.controller.ts - This file is to pass the OTC controllers to the FAD framework to be registered.
|               ├── otc.service.ts - This file is to pass the OTC services to the FAD framework to be registered.
|           ├── services/ - This folder contains the services.
|           ├── templates/ - This folder contains the templates for OTC filter and grid pane skinning.
|           ├── typings/ - consists typing related files.
|       ├── stylesheets/ - The styling files(.scss)are kept in this folder
|       ├── tests/ - all the specs(.test) files are kept here maintaining the same staructure as otc folder has for its .ts files.
|       └── testloader.ts - here all the spec files for unit testing are added.
|   ├── tests-unit/ - This folder contains the testing related setup e.g. karma setup
|       └── karma.config.js - This file contains all the karma related configuration.
|   ├── server.js - All the server related changes for ex.  local server configurations are kept here.
|   ├── index.html - main template file 
|   ├── ms-grunt.bat - This is a bat file which runs the local server
|   ├── ms-grunt-unit.bat - This is a bat file which runs the tests according to the karma configuration.
|...

```
Other than these we have other main two files ‘gruntfile.js’ to maintain grunt tasks and ‘package.json’ for configuration and Dev-dependencies.
