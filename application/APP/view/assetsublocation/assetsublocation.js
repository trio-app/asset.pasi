Ext.define('TDK.view.assetsublocation.assetsublocation', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [

        'TDK.controller.Cassetsublocation',
        'TDK.view.temp.Trickmenu',
        'TDK.store.STassetsublocation',
        'TDK.store.STassetlocation',
        'TDK.view.assetsublocation.FRMassetsublocation',
        'TDK.view.assetsublocation.GRIDassetsublocation'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Cassetsublocation',

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
                        {xtype:'GRIDassetsublocation'},
                        {xtype:'FRMassetsublocation'}
                        
                    ]
                    
                }
            ]

        });

        this.callParent(arguments);
    }
});