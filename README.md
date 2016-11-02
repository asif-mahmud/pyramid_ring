#pyramid_ring

![Image not found](images/pyramid_ring.png)

A Pyramid scaffold that includes -

1. [Pyramid](http://www.pylonsproject.org/) itself
2. [SQLAlchemy](http://www.sqlalchemy.org/)
3. [Angular 2](https://angular.io/)
4. [Semantic UI](http://semantic-ui.com/)
5. [Alembic](http://alembic.zzzcomputing.com/)
6. [Jinja2](http://jinja.pocoo.org/docs/dev/)

##Key Features

* Flexible and powerful web frameworks are put together in one place.
* A predetermined project structure (See Project Structure).
* Saves hours of google search and typing.
* Start with the best tools configured to work together.
* Open source and free.
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

- **#** - _Stands for Folder_
- **+** - _Stands for File_
- _All `__init__.py`'s are ignored._
- _All `README.md`'s are ignored._
- _Learn more about the purpose of the folders in their `README.md` file._

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

###Notes

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
