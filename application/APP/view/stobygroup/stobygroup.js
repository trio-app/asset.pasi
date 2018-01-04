Ext.define('TDK.view.stobygroup.stobygroup', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [

        'TDK.controller.Cstobygroup',
        'TDK.view.temp.Trickmenu',
        'TDK.store.STstobygroup',
        'TDK.view.stobygroup.GRIDstobygroup'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Cstobygroup',

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
                        {xtype:'GRIDstobygroup'}
                        
                    ]
                    
                }
            ]

        });

        this.callParent(arguments);
    }
});