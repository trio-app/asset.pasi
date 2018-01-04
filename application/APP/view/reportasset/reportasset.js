Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.ux': extjs_url + 'build/packages/ux'
    }
});

Ext.define('TDK.view.reportasset.reportasset', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [
        'TDK.view.temp.Trickmenu',
        'TDK.controller.Creportasset',
        'TDK.view.reportasset.GRIDreportasset',
        'TDK.store.STtassetdata',
        'TDK.model.MODtassetdata',
        'Ext.ux.ExportableGrid'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Creportasset',

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
                        {xtype:'GRIDreportasset'},   
                    ]
                }
            ]

        });

        this.callParent(arguments);
    }
});