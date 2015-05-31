# FreeCoder
This is a demo project for AngularJS + Bootstrap + Node.js + Loopback + MongoDB technology to build modern web application.

Currently this is a personal project, all codes are maintained by myself (sure except the 3rd frameworks, libraries, directives and utilities).

I want to build a Question/Task Driven blog system for developers, especially for individual developers, freelancers. Record questions, manage tasks, fill answers, and publish posts. With integrated Pomodoro technology, users can manage tasks, review accomplishment, and keep improvement.

Feel free access demo site: http://freecoder.net, and post issues/suggestions. 

Many thanks for your attention, care and advices.

# Versions
## v0.2.0 (released on 2015/5/31)
### Features:
* User register/login, find/reset password, with email confirmation.
* Create tasks at any time.
* Move tasks to 'today', focus on what should be done just on this day.
* Mark task as finished.
* Start Pomodoro timer for special task. Only one in progress timer for one user, in the future, this timer is able to sync among all clients.
* Cancel in progress timer at any time.

### Technical points:
* Node.js middleware.
* Loopback models, ACLs, email templates.
* Loopback remote methods for REST APIs.
* AngularJS ui-router and templates.
* AngularJS unit tests.
* Grunt tasks: jshint, merge css/scripts, uglify css/scripts.

