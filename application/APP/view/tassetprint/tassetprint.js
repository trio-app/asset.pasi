Ext.define('TDK.view.tassetprint.tassetprint', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [
        'TDK.controller.Ctassetprint',
        'TDK.view.temp.Trickmenu',
        'TDK.store.STtassetdata',
        'TDK.view.tassetprint.GRIDtassetprint'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Ctassetprint',

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
                        {xtype:'GRIDtassetprint'}                        
                    ]
                    
                }
            ]

        });

        this.callParent(arguments);
    }
});

