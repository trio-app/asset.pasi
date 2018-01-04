Ext.define('TDK.controller.Cstobypic', {
    extend: 'Ext.app.ViewController',
    alias:'controller.Cstobypic',
    
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
    dogridclick: function(){
        var grid = this.lookupReference('GRIDstobypic');
        grid.store.load();
        var store = this.lookupReference('STstobypic');
        var data = [];
        store.each(function(rec){
                //console.log(rec.data.id);
                data.push({
                    AssetPic : rec.data.AssetPic,
                    TotalAsset : rec.data.TotalAsset,
                    AssetScanned:rec.data.AssetScanned,
                    AssetNotScan:rec.data.AssetNotScan,
                });
        }); 
        
        JSONToCSVConvertor(data, "STO by PIC", true);
        //console.log(data);  
    }
    
    
});