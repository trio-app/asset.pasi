Ext.define('TDK.view.assetstoall.assetstoall', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [
        'TDK.view.temp.Trickmenu',
        'TDK.controller.Cassetstoall',
        'TDK.view.assetstoall.GRIDassetstoall',
        'TDK.store.STassetstoall',
        'TDK.model.MODassetstoall'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Cassetstoall',

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
                        {xtype:'GRIDassetstoall'},   
                    ]
                }
            ]

        });

        this.callParent(arguments);
    }
});

