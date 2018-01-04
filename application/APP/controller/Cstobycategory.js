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
    getdisplayon:function(){
        var panel = this.lookupReference('panelcard');
        var index = panel.items.indexOf(panel.layout.activeItem);
        return index;
    },
    displayOn:function($param){
        var panel = this.lookupReference('panelcard');
        panel.setActiveItem($param);
        if($param === 0){
            var grid = this.lookupReference('GRIDstobycategory');
            grid.store.load();
        }
    },
    dorefresh: function(){
        this.displayOn(0);
    },
    dogridclick:function(){
        this.displayOn(0);
    },
    doexport: function(){
        var date = Ext.Date.format(new Date(), 'Y-m-d');
        var grid = this.lookupReference('GRIDstobycategory');
        grid.export('EXPORT_REPORT-STO-BY-CATEGORY_' + date);
    },
    
});