Ext.Loader.setConfig({
    enabled: true,
    paths: {
        //'Ext.ux': extjs_url + 'build/packages/ux'
        'Ext.ux': base_url + 'system/inc' // Lokasi Grid untuk Export
    }
});

Ext.define('TDK.view.stobylocation.stobylocation', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [

        'TDK.controller.Cstobylocation',
        'TDK.view.temp.Trickmenu',
        'TDK.store.STstobylocation',
        'TDK.view.stobylocation.GRIDstobylocation',
        'Ext.ux.ExportableGrid'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Cstobylocation',

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
                        {xtype:'GRIDstobylocation'}
                        
                    ]
                    
                }
            ]

        });

        this.callParent(arguments);
    }
});