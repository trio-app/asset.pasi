Ext.define('TDK.controller.Cstosummary', {
    extend: 'Ext.app.ViewController',
    alias:'controller.Cstosummary',
    
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
            },
            'FRMstosummary button[action=refreshdata]':{
              click: this.getSummary
            }
        });
    },
    getdisplayon:function(){
        var panel = this.lookupReference('panelcard');
        var index = panel.items.indexOf(panel.layout.activeItem);
        return index;
    },
    displayOn:function($param){
        var panel = this.lookupReference('panelcard');
        panel.setActiveItem($param);
        if($param === 1){
            var grid = this.lookupReference('GRIDstosummary');
            grid.store.load();
        }
    },
    dogridclick:function(){
        this.displayOn(1);
    },
    dorefresh: function(){
        var grid = this.lookupReference('GRIDstosummary');
        grid.store.load();
        this.displayOn(0);
    },
    getSummary: function(){
        if (this.getdisplayon() === 0){
            return false;
        }
        var form = this.lookupReference('FRMstosummary');
        var valform = form.getForm().getValues();
       
        
        var st = form.getForm().findField('total').getValue();
        if(form.isValid()){
            if (st===''){
                TDK.view.temp.Run.proses('Stosummary/summary',valform);
            }
            this.displayOn(0);
        }
    }
    
    
});