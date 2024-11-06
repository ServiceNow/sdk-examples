<h1 align="center">
ServiceNow SDK Samples
</h1>

This repository contains sample code illustrating the [ServiceNow SDK](https://docs.servicenow.com/csh?topicname=servicenow-sdk.html&version=latest) and Fluent language. You can read, play with or adapt from these samples to create your own application.

## Prerequisites

You need to use [node](https://nodejs.org/en/) v20.0 to run the examples. 

## Usage

-   `git clone https://github.com/ServiceNow/sdk-examples`
-   `code <sample directory>` to open one of the sample projects, e.g. hello-world-sample
-   `npm install`
-   `npm run build` to build any of the sample projects if desired

NOTE: You will not build this project from the root, instead going to each directory and installing and building there. It is suggested to use these as templates and add them to your projects instead of attempting to deploy them to your instance directly from here.

## Samples

<!-- SAMPLES_BEGIN -->

| Sample Name                                           | API & Contribution             |
| ----------------------------------------------------- | ------------------------------ |
| [Application Menu](applicationmenu-sample/README.md)  | Application Menu example       |
| [Business Rule](businessrule-sample/README.md)        | Business Rule example          |
| [Client Script](clientscript-sample/README.md)        | Client Script example          |
| [Dependencies](dependencies-sample/README.md)         | Use table dependencies example |
| [Hello World](hello-world-sample/README.md)           | Basic sample application       |
| [List](list-sample/README.md)                         | List example                   |
| [Scripted Rest API](restapi-sample/README.md)         | RestApi simple example         |
| [Cross-Scope Module](sys_module-sample/README.md)     | How to call module cross-scope |
| [Record](record-sample/README.md)                     | Record example                 |
| [Tables](table-sample/README.md)                      | Tables API sample              |
| [Automated Test Framework](test-atf-sample/README.md) | ATF test sample                |
<!-- SAMPLES_END -->
