Ext.define('TDK.view.assetpic.assetpic', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [

        'TDK.controller.Cassetpic',
        'TDK.view.temp.Trickmenu',
        'TDK.store.STassetpic',
        'TDK.view.assetpic.FRMassetpic',
        'TDK.view.assetpic.GRIDassetpic'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Cassetpic',

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
                        {xtype:'GRIDassetpic'},
                        {xtype:'FRMassetpic'}
                        
                    ]
                    
                }
            ]

        });

        this.callParent(arguments);
    }
});