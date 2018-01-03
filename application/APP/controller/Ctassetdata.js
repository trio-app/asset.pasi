Ext.define('TDK.controller.Ctassetdata', {
    extend: 'Ext.app.ViewController',
    alias:'controller.Ctassetdata',
    
    init: function (view) {
                
        this.control({
            'trickmenu':{
                render: this.loadmenu
            },
            'trickmenu button[pid=new]':{
              click: this.donew
            },
            'trickmenu button[pid=edit]':{
              click: this.dogridclick
            },
            'trickmenu button[pid=save]':{
              click: this.dosave
            },
            'trickmenu button[pid=delete]':{
              click: this.dodelete
            },
            'trickmenu button[pid=refresh]':{
              click: this.dorefresh
            },
            'trickmenu button[pid=gridtable]':{
              click: this.dogridclick
            },
            'GRIDtassetdata': {
                itemdblclick: this.onRowdblclick
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
        if($param === 0){
            var grid = this.lookupReference('GRIDtassetdata');
            grid.store.load();
        }
    },
    dogridclick:function(){
        this.displayOn(0);
    },
    donew:function(){
        
        this.displayOn(1);
        var form = this.lookupReference('FRMtassetdata');
        form.getForm().reset();
        form.getForm().findField("AssetInfo").focus();
    },
    dosave:function(){
        if (this.getdisplayon() === 0){
            return false;
        }
        var form = this.lookupReference('FRMtassetdata');
        var valform = form.getForm().getValues();
        
        var st = form.getForm().findField('AssetID').getValue();
        if(form.isValid()){
            if (st===''){
                TDK.view.temp.Run.proses('Tassetdata/create',valform);
            }else{
                TDK.view.temp.Run.proses('Tassetdata/update',valform);
            }
            this.displayOn(0);
        }
    },
    onRowdblclick: function(me, record, item, index) {
        this.displayOn(1);
        var form = this.lookupReference('FRMtassetdata');
        form.getForm().setValues(record.getData());
        
    },
    
    dodelete:function(){
        if (this.getdisplayon() === 0){
            return false;
        }
        var form = this.lookupReference('FRMtassetdata');
        var AssetID = form.getForm().findField("AssetID").getValue();
        
        var AssetName = form.getForm().findField("AssetName").getValue();
        if (AssetID!=='') {
            Ext.MessageBox.confirm('Confirm', 'Delete Asset : ' + AssetName + '?', 
            function(btnText){
                if(btnText === "yes"){
                    TDK.view.temp.Run.proses('Tassetdata/delete',form.getForm().getValues());
                    this.donew();
                }
            }
            , this);
        }else{
            Ext.MessageBox.alert('Access Denied', 'Please select data', this.showResult, this);    
        }
    }
    
});

