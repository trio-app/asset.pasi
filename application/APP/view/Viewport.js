Ext.define('TDK.view.Viewport', {
    extend: 'Ext.panel.Panel',
    requires : [
            'TDK.controller.Cmainpage',
            'TDK.view.mainpage.mainpage',
            'TDK.view.mainpage.mainlogin',
            'TDK.view.temp.Run'
        ], 
    
    //controller:'Cmainpage',
    layout: 'card',
    border:false,
    frame:false,
    items: [
//        {
//            xtype:'container',
//            layout:'center',
//            items:[{
//                    xtype:'mainlogin'
//            }]
//        },
        {
            xtype:'mainpage'
        }
    ]

});

