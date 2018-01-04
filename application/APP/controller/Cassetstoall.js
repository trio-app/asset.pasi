Ext.define('TDK.controller.Cassetstoall', {
    extend: 'Ext.app.ViewController',
    alias:'controller.Cassetstoall',
    
    init: function (view) {
        
        this.control({
            'trickmenu':{
                render: this.loadmenu
            },
            'trickmenu button[pid=refresh]':{
              click: this.dorefresh
            }
        });
    },
    loadmenu:function(me){
        me.items.each(function( item ) {
            item.setVisible(false);
        });
        var panel = me.items;
        panel.getAt(11).setVisible(true);
        panel.getAt(12).setVisible(true);
    },
    dorefresh: function(){
        var grid = this.lookupReference('GRIDassetstoall');
        grid.store.load();
    },
});

