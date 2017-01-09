from pyramid.view import view_config
from pyramid.httpexceptions import HTTPFound
import os

@view_config(route_name='home_redirect')
def redirect_to_home(request):
    return HTTPFound(
        location=request.route_url('home')
    )


def includeme(config):
    dist_dir = os.path.abspath(
        os.path.abspath(__file__) + '/../../dist'
    )
    config.add_static_view('static', 'static', cache_max_age=3600)
    config.add_static_view('dist', dist_dir, cache_max_age=3600)

    config.add_route('home_redirect', '/')

    # Add all of your view modules by include method
    config.include('.views.home', route_prefix='home')
