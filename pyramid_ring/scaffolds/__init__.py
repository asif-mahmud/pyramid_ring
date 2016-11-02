from pyramid.scaffolds import PyramidTemplate
import sys


class PyramidRingProjectTemplate(PyramidTemplate):
    """
    Project template for jinja2 and sqlalchemy. This is only compatible with 1.3
    """
    _template_dir = 'pyramid_ring'
    summary = 'Pyramid Ring Project Scaffold'

    def pre(self, command, output_dir, vars):
        vars['project_path'] = output_dir
        vars['project_venv'] = sys.prefix
        return PyramidTemplate.pre(self, command, output_dir, vars)
