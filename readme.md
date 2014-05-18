# [bg-base](https://github.com/buildrad/ng-base) 

A minimal, IIS friendly, DRY boilerplate for [AngularJS](http://angularjs.org) projects.

***

## Quick Start

Clone then use.

//TODO: How to use r.js

```
$ git clone git://github.com/buildrad/ng-base
$ cd ng-base
Open cmd.exe / Command Line Editor as Administrator (to create an IIS site)
$ %windir%\system32\inetsrv\AppCmd.exe add site /name:ngbase  /physicalPath:[YOUR FULL PATH TO THE CLONED DIRECTORY] /+bindings.[protocol='http',bindingInformation='*:80:ngbase']
$ echo. >> %windir%\System32\drivers\etc\hosts
$ echo 127.0.0.1 ngbase >> %windir%\System32\drivers\etc\hosts
$ %windir%\system32\inetsrv\AppCmd.exe start site ngbase
$ start chrome "http://ngbase"
```

## Purpose

ng-base is designed to provide the bare minimum required to get up and running with an AngularJS site however, with a few additions like:

- A folder structure to follow
- Named DRY routes
- 'Master Page' like views that inherit other views

Coming soon:

- A style guide you can give to new developers with "hello world" examples and opinionated conventions
- A suggested permissions model
- A testing scaffolding

## Learn

### Config

Set your configuration up in /src/config at minimum changing these values to point to your specific environment:

```
apiBase: 'http://api.foo.dev/',
socketAddr: 'ws://api.foo.dev:8080',
authBase: 'http://api.foo.dev/auth/',
```

### Important Files & Folders

//Todo: Describe briefly the important files & folders and what they contain

```
ng-base/
  |- assets/
  |- src/
  |  |- app/ <app logic>
  |  |- base/ <what is this for?>
```

### Named Routes

To combat repetition of route names in views and code, each route registered in /src/router.js is named and accessible to the view.

**Bad**

```
<a href="#/Bar/1">Bar</a>
```

**Good**
```
<a route="app.bar({bar: '1'})">Bar</a>
```

**Why?**

Because if the route moves anywhere else you'll need to update all the links in your view. This way, you only define the physical URL route once.

### Master Pages

//TODO: Document how master pages work

## Deploying

//TODO: What folders need to go live? how do you run r.js to build?