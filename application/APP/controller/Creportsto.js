Ext.define('TDK.controller.Creportsto', {
    extend: 'Ext.app.ViewController',
    alias:'controller.Creportsto',
    
    init: function (view) {
        this.control({
            'trickmenu':{
                render: this.loadmenu
            },
            'trickmenu button[pid=refresh]':{
              click: this.dorefresh
            },
            'trickmenu button[pid=export]':{
              click: this.doexport
            },
        });

    },
    loadmenu:function(me){
        me.items.each(function( item ) {
            item.setVisible(false);
        });
        var panel = me.items;
        panel.getAt(11).setVisible(true);
        panel.getAt(12).setVisible(true);
        panel.getAt(13).setVisible(true);
        panel.getAt(16).setVisible(true);
    },
    doexport: function(){
        var date = Ext.Date.format(new Date(), 'Y-m-d');
        var grid = this.lookupReference('GRIDreportsto');
        grid.export('EXPORT_REPORT-STO_' + date);
    },
    dorefresh: function(){
        var grid = this.lookupReference('GRIDreportsto');        
        grid.store.load();
    }    
});

