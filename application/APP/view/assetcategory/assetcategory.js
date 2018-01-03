Ext.define('TDK.view.assetcategory.assetcategory', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [

        'TDK.controller.Cassetcategory',
        'TDK.view.temp.Trickmenu',
        'TDK.store.STassetcategory',
        'TDK.view.assetcategory.FRMassetcategory',
        'TDK.view.assetcategory.GRIDassetcategory'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Cassetcategory',

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
                        {xtype:'GRIDassetcategory'},
                        {xtype:'FRMassetcategory'}
                        
                    ]
                    
                }
            ]

        });

        this.callParent(arguments);
    }
});