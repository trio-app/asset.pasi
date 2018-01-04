Ext.define('TDK.view.assetlocation.assetlocation', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [

        'TDK.controller.Cassetlocation',
        'TDK.view.temp.Trickmenu',
        'TDK.store.STassetlocation',
        'TDK.view.assetlocation.FRMassetlocation',
        'TDK.view.assetlocation.FRMuploadlocation',
        'TDK.view.assetlocation.GRIDassetlocation'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Cassetlocation',

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
                        {xtype:'GRIDassetlocation'},
                        {xtype:'FRMassetlocation'}
                        
                    ]
                    
                }
            ]

        });

        this.callParent(arguments);
    }
});