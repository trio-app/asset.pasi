Ext.define('TDK.view.Tassetdata.Tassetdata', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [
        'TDK.controller.Ctassetdata',
        'TDK.view.temp.Trickmenu',
        'TDK.store.STtassetdata',
        'TDK.store.STassetgroup',
        'TDK.view.Tassetdata.FRMtassetdata',
        'TDK.view.Tassetdata.GRIDtassetdata'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Ctassetdata',

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
                        {xtype:'GRIDtassetdata'},
                        {xtype:'FRMtassetdata'}
                        
                    ]
                    
                }
            ]

        });

        this.callParent(arguments);
    }
});

