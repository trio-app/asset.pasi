Ext.define('TDK.view.stobypic.stobypic', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [

        'TDK.controller.Cstobypic',
        'TDK.view.temp.Trickmenu',
        'TDK.store.STstobypic',
        'TDK.view.stobypic.GRIDstobypic'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Cstobypic',

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
                        {xtype:'GRIDstobypic'}
                        
                    ]
                    
                }
            ]

        });

        this.callParent(arguments);
    }
});