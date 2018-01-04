Ext.define('TDK.controller.Creportasset', {
    extend: 'Ext.app.ViewController',
    alias:'controller.Creportasset',
    
    init: function (view) {
        this.control({
            'trickmenu button[pid=refresh]':{
              click: this.dorefresh
            },
            'trickmenu button[pid=export]':{
              click: this.doexport
            },
        });

    },
    doexport: function(){
        var date = Ext.Date.format(new Date(), 'Y-m-d');
        var grid = this.lookupReference('GRIDreportasset');
        grid.export('EXPORT_REPORT-ASSET_' + date);
    },
    dorefresh: function(){
        var grid = this.lookupReference('GRIDreportasset');        
        grid.store.load();
    }    
});

