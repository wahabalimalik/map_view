odoo.define('web.MapView', function (require) {
    'use strict';

    var core = require('web.core');
    var View = require('web.View');
    var session = require('web.session');
    var QWeb = require('web.QWeb');

    var qweb = core.qweb;
    var _lt = core._lt;
    var _t = core._t;

    var MapView = View.extend({
        template: 'MapView',
        accesskey: "m",
        className: 'o_map',
        display_name: _lt('Map'),
        defaults: _.extend(View.prototype.defaults, {
            selectable: true,
            header: true,
            action_buttons: true,
            searchable: true,
        }),
        icon: 'fa-map-o',
        mobile_friendly: true,
        init: function () {
            this._super.apply(this, arguments);
            this.qweb = new QWeb(session.debug, {
                _s: session.origin
            });
            this.markers = [];
            this.map = false;
            this.shown = $.Deferred();
            this.fields = this.fields_view.fields;
            this.children_field = this.fields_view.field_parent;
            // this.geocoder = new google.maps.Geocoder;
            this.many2manys = this.fields_view.many2manys || [];
            this.m2m_context = {};
        },
        start: function () {
            var self = this;
            this.record_options = {
                editable: false,
                deletable: false,
                fields: this.fields_view.fields,
                qweb: this.qweb,
                model: this.model,
                read_only_mode: this.options.read_only_mode,
            };

            return this._super();
        },
    });


    core.view_registry.add('map', MapView);

    return MapView;
});