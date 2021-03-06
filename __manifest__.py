# -*- coding: utf-8 -*-
# License LGPL-3.0 or later (http://www.gnu.org/licenses/lgpl).
{
    'name': 'Odoo Leaflet Carto',
    'version': '10.0.1.0.3',
    'author': "Wahab Ali Malik",
    'maintainer': 'wahabalimalik@gmail.com',
    'category': 'View',
    'description': """
Web Google Map and google places autocomplete address form
==========================================================

This module brings three features:
1. Allows user to view all partners addresses on google maps.
2. Enabled google places autocomplete address form into partner
form view, it provide autocomplete feature when you typed an address of partner
3. Routes information
""",
    'data': [
        'views/google_places_template.xml',
        'views/res_partner.xml',
    ],
    'qweb': ['static/src/xml/widget_places.xml'],
    'images': ['static/description/thumbnails.png'],
    'installable': True,
    'uninstall_hook': 'uninstall_hook',
}
