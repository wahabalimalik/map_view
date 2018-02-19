# -*- coding: utf-8 -*-
# License LGPL-3.0 or later (http://www.gnu.org/licenses/lgpl).
from odoo import fields, models, _

class IrActionsActWindow(models.Model):
    _inherit = 'ir.actions.act_window'

    view_type = fields.Selection(selection_add=[('map', _('Map'))])
    
class IrActionsActWindowView(models.Model):
    _inherit = 'ir.actions.act_window.view'

    view_mode = fields.Selection(selection_add=[('map', _('Map'))])

class IrUiView(models.Model):
    _inherit = 'ir.ui.view'

    type = fields.Selection(selection_add=[('map', _('Map'))])
