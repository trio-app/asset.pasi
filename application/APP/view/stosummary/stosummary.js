Ext.define('TDK.view.stosummary.stosummary', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [

        'TDK.controller.Cstosummary',
        'TDK.view.temp.Trickmenu',
        'TDK.store.STstosummary',
        'TDK.view.stosummary.FRMstosummary',
        'TDK.view.stosummary.GRIDstosummary'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Cstosummary',

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
                        {xtype:'FRMstosummary'},
                        {xtype:'GRIDstosummary'}
                        
                    ]
                    
                }
            ]

        });

        this.callParent(arguments);
    }
});