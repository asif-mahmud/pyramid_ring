#pyramid_ring

![Image not found](images/pyramid_ring.png)

A Pyramid scaffold that includes -

1. [Pyramid](http://www.pylonsproject.org/) itself
2. [SQLAlchemy](http://www.sqlalchemy.org/)
3. [Angular 2](https://angular.io/)
4. [Bootstrap](http://getbootstrap.com/)
5. [Alembic](http://alembic.zzzcomputing.com/)
6. [Jinja2](http://jinja.pocoo.org/docs/dev/)
7. [JQuery](https://jquery.com/)

##Key Features

* Flexible and powerful web frameworks are put together in one place.
* A predetermined project structure (See Project Structure).
* Saves hours of google search and typing.
* Start with the best tools configured to work together.
* Open source and free.
* IDE (i.o PyCharm) friendly.
* One configuration file per environment(i.e development and production).
* A simple **Makefile** to make life even easier(See the usage of the Makefile).
* A built-in `ModelBase` for **SQLAlchemy** (See features of the `ModelBase`).

##Requirements

* A Linux OS
* [Python 3+](https://www.python.org/downloads/)
* [Node.js](https://nodejs.org/en/)
* npm
* gulp

##Installation

- Create a `Python virtual environtment` first.
- Clone the **git repo**.
- Open a `Terminal` inside `pyramid_ring`. 
- Activate the `virtual environtment` by running `source <your-venv-path>/bin/activate`. 
- Run `python setup.py install`

##Project Structure

- **#** - Stands for Folder.
- **+** - Stands for File.
- All `__init__.py` are ignored.
- All `README.md`'s are ignored.
- Learn more about the purpose of the folders in their `README.md` file.

```
 # project_name
 |
 |-# database
 |
 |-# project_name
 | |
 | |-# models
 | |-# static
 | |-# basetemplates
 | |-# views
 | |-# security
 | |-# ngsrc
 | |-# scripts
 | |-# tests
 | |-+ routes.py - Includes all your view modules and a redirect view to home view.
 |
 |-# alembic
 | |
 | |-# versions
 | |-+ script.py.mako
 | |-+ env.py
 |
 |-+ setup.py - Python distribution setup file.
 |-+ development.ini - Development environment config file.
 |-+ production.ini - Production environment config file.
 |-+ alembic.ini - Pyramid project friendly alembic config file.
 |-+ pytest.ini - Python test config.
 |-+ MANIFEST.in
 |-+ CHANGES.txt
 |-+ Makefile - Provides some useful shortcut commands.
```

##Usage of Makefile 

The `Makefile` inside the `project folder` provides some easy shortcut commands-

- `make setup` : Setup [Angular 2](https://angular.io/) and [Semantic UI](http://semantic-ui.com/). This command must be run once at the beginnng.
- `make tsc` : Call `typescript compiler` to compile all angular src files.
- `make tscw` : Call `typescript compiler` to watch for file changes and compile on the fly.
- `make revision`: Make a database revision by [Alembic](http://alembic.zzzcomputing.com/).
- `make upgrade` : Migrate your database to latest revision.
- `make downgrade` : Migrate your database to a previous revision.
- `make run` : Run `pserve` to serve local server.
- `make runtests` : Run `pytest` to test the project.

###Notes

`Updated in Version 1.2.0`: Setting the `Makefile` variables are done automatically. Just run `pcreate` from your 
`python virtual environment`.

Change the following variables to suite your project. `TODO:` Can this be automated ?

- PROJECT_NAME : Project name
- VENV_PATH : Points to the absolute or relative path to the virtual environment.
- PROJECT_PATH : Points to the absolute project root folder.

##Features of `ModelBase`

It is a default `Model` base for all of your **SQLAlchemy** Models. But you don't have to inherit it, instead you 
inherit the infamous `Base` class. It provides the following class level attributes -

- `id` : An `Integer Column` as `primary_key`. Feel free to override it anytime.
- `created_on` : A `DateTime Column` to provide when the entry was created. Defaults to current time.
- `updated_on` : A `DateTime Column` to provide when the entry was updated. Always the last update time.
- `__tablename__` : You don't have to write `__tablename__` whenver you create a `Model`

##Version History

##Version 1.5.0
* Using `bootstrap` instead of `Semantic UI`.
* Removed `Makefile` command `csswatch`.
* Added `bootstrap-select` for extra functionalities of html `select`.
* Added `apple-touch-icon` and `favicon` in base template.
* Added example code for [Google Analytics](https://analytics.google.com/) in base template.

##Version 1.4.3
* Removed `nose`
* Using `pytest` to run tests.
* Modified `Makefile` command to run tests.

##Version 1.4.2
* Database table naming convention changed to `some_table_name` style.

###Version 1.4.1
* Added `nosetest` capability to `Makefile`.
* Updated `make setup` command to install dependencies for testing.

###Version 1.4.0
* Added an encrypted session factory provided by `pyramid_nacl_session` addon.
* Added `CSRF/XSRF` token availability to angular 2 `HttpModule`

###Version 1.3.1
* Makefile fixes

###Version 1.3.0
* Added jQuery
* A default responsive navigation bar added with mobile only sidebar
* Added `gulp watch` to `Makefile` command
* Added more blocks to `layout.jinja2`
* Navigation bar is implemented in `layout-with-nav.jinja2`

###Version 1.2.0

* Makefile variable fix
* `ModelBase.updated_on` column now has `default` value.
* Angular modules path fix

###Version 1.0.0

* First Version
* Includes Pyramid, SQLAlchemy, Jinja2, Angular2, Semantic UI
