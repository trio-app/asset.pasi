Ext.define('TDK.view.mainpage.mainpage', {
    extend: 'Ext.panel.Panel',
    alias:'widget.mainpage',
    reference:'mainpage',
    layout: 'border',
    
    items: [{
        region: 'north',
        margin: '3 0 3 0',
        xtype:'toolbar',
        items: ['->',{
                xtype:'component',
                html:Varconfig.Applicationtitle
            }
        ]
    }, {
        region: 'west',
        itemId:'nav',
        id:'nav',
        collapsible:true,
        split:true,
        xtype: 'treepanel',
        title: 'Menu',
        margins: '5 0 5 5',
        rootVisible: false,
        width: 200,
        tools: [{
                type: 'refresh',
                handler: function(){
                        Ext.getCmp('nav').store.load();
                }
        }],
        store: Ext.create('Ext.data.TreeStore',{
            root: {
                    expanded: true
            },
            autoLoad:false,
            proxy: {
                    type: 'ajax',
                    url: base_url + 'Home/samplejson'
            }
        }),
        bbar: ['->',{
            pid: 'logout',
            text: 'Log Out [Application]',
            icon:extjs_url + 'icon/logout.ico'
        }]
        
        
    }, {
        margin: '3 0 0 0',
        region: 'south',
        xtype:'toolbar',
        items: ['-',{
                xtype:'component',
                html:'User Login : ' + Varconfig.UserLogin
            },'   ','-',{
                xtype:'component',
                html:'Login Date : ' + Varconfig.LoginDate
            },'-'
        ]
        
    }, {
        region: 'center',
        itemId:'tabs',
        reference:'menutab',
        xtype: 'tabpanel', // TabPanel itself has no title
        activeTab: 0
    }]

});