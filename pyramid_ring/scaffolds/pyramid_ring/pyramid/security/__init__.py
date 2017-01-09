from .authentication import BlogSiteAuthPolicy, get_user
from pyramid.authorization import ACLAuthorizationPolicy
from .authorizaton import BaseAuth
from pyramid_nacl_session import (
    generate_secret,
    EncryptedCookieSessionFactory,
)
from pyramid.events import NewResponse


COOKIE_NAME = 'XSRF-TOKEN'
HEADER_NAME = 'X-XSRF-Token'


def get_session_factory():
    secret = generate_secret(as_hex=False)
    factory = EncryptedCookieSessionFactory(secret=secret)
    return factory


def on_GET_request_setup_csrf_cookie(ev):
    """
    If this is the first GET request, we set the CSRF token in a
    JavaScript readable session cookie called XSRF-TOKEN.
    Angular will pick it up for subsequent AJAX requests.
    """
    if ev.request.user is not None:  # and not 'static' in ev.request.path:
        token = ev.request.session.get_csrf_token()
        if ev.request.cookies.get(COOKIE_NAME) != token:
            ev.response.set_cookie(COOKIE_NAME, token)


def includeme(config):
    settings = config.get_settings()

    auth_policy = BlogSiteAuthPolicy(
        settings['auth.secret'],
    )

    config.set_authentication_policy(auth_policy)
    config.set_authorization_policy(ACLAuthorizationPolicy())
    config.add_request_method(get_user, 'user', reify=True)
    config.set_session_factory(get_session_factory())
    config.set_default_csrf_options(
        require_csrf=True,
        token=COOKIE_NAME,
        header=HEADER_NAME,
    )
    config.add_subscriber(on_GET_request_setup_csrf_cookie, NewResponse)
