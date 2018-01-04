Ext.define('TDK.controller.Ctassetprint', {
    extend: 'Ext.app.ViewController',
    alias:'controller.Ctassetprint',
    
    init: function (view) {
        launchQZ();
        this.control({
            'trickmenu':{
                render: this.loadmenu
            },
            'trickmenu button[pid=new]':{
              click: this.doprint
            },
            'trickmenu button[pid=refresh]':{
              click: this.dorefresh
            },
            'GRIDtassetprint': {
                itemdblclick: this.onRowdblclick
            }
        });
    },
    loadmenu:function(me){
        me.items.each(function( item ) {
            item.setVisible(false);
        });
        var panel = me.items;
        panel.getAt(0).setVisible(true);
        panel.getAt(1).setVisible(true);
        panel.getAt(2).setVisible(true);
        panel.getAt(2).setTooltip('Print New Barcode');
        panel.getAt(11).setVisible(true);
        panel.getAt(12).setVisible(true);
        panel.getAt(13).setVisible(true);
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
            var grid = this.lookupReference('GRIDtassetprint');
            grid.store.load();
        }
    },
    dorefresh: function(){
        this.displayOn(0);
    },
    dogridclick:function(){
        this.displayOn(0);
    },
    doprint: function(){
        var grid = this.lookupReference('GRIDtassetprint');
        var selection = grid.getSelectionModel().getSelection();

        var check = grid.getSelectionModel().getCount();
        if(check > 0){
        Ext.Msg.confirm('Proses Print Barcode', 'Akan Melakukan Print sebanyak ' + check + ' Label. Proses?', function (button) {
            if (button == 'yes') {
                var printData = []; //variable untuk array
            for(key in selection){
                var config = getUpdatedConfig();
                printData.push([ //memasukkan data yang dipilih ke dalam variable
                    '^XA\n', //kode untuk printer barcode
                    '^MMT\n',
                    '^MD9\n',
                    '^PW550\n',
                    '^LL160\n',
                    '^LS0\n',
                    '^FT110,151^BQN,5,5\n',
                    '^FDMA,' + selection[key]['data']['AssetNo'] + '^FS\n',
                    '^FT232,49^A0N,26,26^FH\^FDASSET PASI^FS',
                    '^FT232,86^A0N,24,24^FH\^FDSAP NO : ' + selection[key]['data']['AssetSAPNo'] + '^FS\n',
                    '^FT232,120^A0N,24,24^FH\^FDASSET NO : ' + selection[key]['data']['AssetNo'] + '^FS\n',
                    '^PQ1,0,1,Y\n',
                    '^XZ\n'
                ]);
            }
            qz.print(config, printData).catch(displayError);  //proses print barcode 
            }
        }, this);
        }else{
            Ext.MessageBox.show({
                title: 'Print Failed',
                msg: 'Tidak ada Asset yang Dipilih',
                buttons: Ext.MessageBox.OK,
                icon: 'info'
           }); 
        }
    }
});

