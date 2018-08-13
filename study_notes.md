# package.json
A package.json file:

lists the packages that your project depends on.
allows you to specify the versions of a package that your project can use using semantic versioning rules.
makes your build reproducible, and therefore much easier to share with other developers.

#Request - Simplified HTTP client

Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

https://www.npmjs.com/package/request

var request = require("request");

#dotenv

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. 

Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

#The Twelve Factor App

https://12factor.net/

In the modern era, software is commonly delivered as a service: called web apps, or software-as-a-service. The twelve-factor app is a methodology for building software-as-a-service apps that:

Use declarative formats for setup automation, to minimize time and cost for new developers joining the project;

Have a clean contract with the underlying operating system, offering maximum portability between execution environments;

Are suitable for deployment on modern cloud platforms, obviating the need for servers and systems administration;

Minimize divergence between development and production, enabling continuous deployment for maximum agility;

And can scale up without significant changes to tooling, architecture, or development practices.

The twelve-factor methodology can be applied to apps written in any programming language, and which use any combination of backing services (database, queue, memory cache, etc).

#File System

The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.

To import FS package:

** const fs = require('fs');**

All file system operations have synchronous and asynchronous forms.

