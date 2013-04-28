# -*- coding: utf-8 -*-
AUTHOR = 'Rob Story'
SITENAME = "wrobstory.github.com"
SITEURL = 'http://wrobstory.github.com'
TIMEZONE = 'US/Pacific'

GITHUB_URL = 'https://github.com/wrobstory'
TWITTER_USERNAME = 'oceankidbilly'
DEFAULT_CATEGORY = 'Blog'
THEME = 'notmyidea'
GOOGLE_ANALYTICS = 'UA-39972069-1'

SOCIAL = (('twitter', 'http://twitter.com/oceankidbilly'),
          ('github', 'http://github.com/wrobstory'),)

STATIC_PATHS = ['images', ]


PERMALINK_STRUCTURE = '{date:%Y}/{date:%m}/'
ARTICLE_URL = '%s{slug}.html' % PERMALINK_STRUCTURE
ARTICLE_LANG_URL = '%s{slug}-{lang}.html' % PERMALINK_STRUCTURE
PAGE_URL = '%spages/{slug}.html' % PERMALINK_STRUCTURE
PAGE_LANG_URL = '%spages/{slug}-{lang}.html' % PERMALINK_STRUCTURE
ARTICLE_SAVE_AS = '%s{slug}.html' % PERMALINK_STRUCTURE
ARTICLE_LANG_SAVE_AS = '%s{slug}-{lang}.html' % PERMALINK_STRUCTURE
PAGE_SAVE_AS = '%spages/{slug}.html' % PERMALINK_STRUCTURE
PAGE_LANG_SAVE_AS = '%spages/{slug}-{lang}.html' % PERMALINK_STRUCTURE


MENUITEMS = (
    ('Archives', '{0}/archives.html'.format(SITEURL)),
)


WITH_PAGINATION = True
DEFAULT_PAGINATION = 5
REVERSE_ARCHIVE_ORDER = True

