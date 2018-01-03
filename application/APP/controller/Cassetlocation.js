Ext.define('TDK.controller.Cassetlocation', {
    extend: 'Ext.app.ViewController',
    alias:'controller.Cassetlocation',
    
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
            'GRIDassetlocation': {
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
            var grid = this.lookupReference('GRIDassetlocation');
            grid.store.load();
        }
    },
    dogridclick:function(){
        this.displayOn(0);
    },
    donew:function(){
        
        this.displayOn(1);
        var form = this.lookupReference('FRMassetlocation');
        form.getForm().reset();
        form.getForm().findField("LocName").focus();
    },
    dosave:function(){
        if (this.getdisplayon() === 0){
            return false;
        }
        var form = this.lookupReference('FRMassetlocation');
        var valform = form.getForm().getValues();
        
        var st = form.getForm().findField('LocID').getValue();
        if(form.isValid()){
            if (st===''){
            TDK.view.temp.Run.proses('assetlocation/create',valform);
            }else{

                TDK.view.temp.Run.proses('assetlocation/update',valform);
            }
        }
        this.displayOn(0);
    },
    onRowdblclick: function(me, record, item, index) {
        this.displayOn(1);
        var form = this.lookupReference('FRMassetlocation');
        form.getForm().setValues(record.getData());
        
    },
    
    dodelete:function(){
        if (this.getdisplayon() === 0){
            return false;
        }
        var form = this.lookupReference('FRMassetlocation');
        var locationID = form.getForm().findField("LocID").getValue();
        
        var GroupName = form.getForm().findField("LocName").getValue();
        if (locationID!=='') {
            Ext.MessageBox.confirm('Confirm', 'Delete Location : ' + GroupName + '?', 
            function(btnText){
                if(btnText === "yes"){
                    TDK.view.temp.Run.proses('assetlocation/delete',form.getForm().getValues());
                    this.donew();
                }
            }
            , this);
        }else{
            Ext.MessageBox.alert('Access Denied', 'Please select data', this.showResult, this);    
        }
    }
    
});