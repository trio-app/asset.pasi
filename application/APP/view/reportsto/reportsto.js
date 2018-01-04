Ext.Loader.setConfig({
    enabled: true,
    paths: {
        //'Ext.ux': extjs_url + 'build/packages/ux'
        'Ext.ux': base_url + 'system/inc'
    }
});

Ext.define('TDK.view.reportsto.reportsto', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [
        'TDK.view.temp.Trickmenu',
        'TDK.controller.Creportsto',
        'TDK.view.reportsto.GRIDreportsto',
        'TDK.store.STassetstoall',
        'TDK.model.MODassetstoall',
        'Ext.ux.ExportableGrid'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Creportsto',

    initComponent: function () {

        Ext.apply(this, {
            xtype:'layout-border',
            layout: 'border',
            border:false,
            frame:false,
            bodyBorder: false,

            items: [
                {
                    region: 'north',
                    xtype:'trickmenu'
                },{
                    region: 'center',
                    xtype:'panel',
                    reference:'panelcard',
                    layout:'card',
                    activeItem:0,
                    frame:false,
                    border:false,
                    items:[
                        {xtype:'GRIDreportsto'},   
                    ]
                }
            ]

        });

        this.callParent(arguments);
    }
});