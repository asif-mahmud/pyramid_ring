from pyramid.scaffolds import PyramidTemplate


class PyramidRingProjectTemplate(PyramidTemplate):
    """
    Project template for jinja2 and sqlalchemy. This is only compatible with 1.3
    """
    _template_dir = 'pyramid_ring'
    summary = 'Pyramid Ring Project Scaffold'
