Ext.define('TDK.view.assetgroup.assetgroup', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [

        'TDK.controller.Cassetgroup',
        'TDK.view.temp.Trickmenu',
        'TDK.store.STassetgroup',
        'TDK.view.assetgroup.FRMassetgroup',
        'TDK.view.assetgroup.GRIDassetgroup',
        'TDK.view.assetgroup.FRMuploadgroup'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Cassetgroup',

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
                        {xtype:'GRIDassetgroup'},
                        {xtype:'FRMassetgroup'}
                    ]
                    
                }
            ]

        });

        this.callParent(arguments);
    }
});