Ext.define('TDK.controller.Cstobycategory', {
    extend: 'Ext.app.ViewController',
    alias:'controller.Cstobycategory',
    
    init: function (view) {
                
        this.control({
            'trickmenu':{
                render: this.loadmenu
            },
            'trickmenu button[pid=refresh]':{
              click: this.dorefresh
            },
            'trickmenu button[pid=gridtable]':{
              click: this.dogridclick
            }
        });
    },
        
    
});