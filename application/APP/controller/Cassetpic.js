Ext.define('TDK.controller.Cassetpic', {
    extend: 'Ext.app.ViewController',
    alias:'controller.Cassetpic',
    
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
            'GRIDassetpic': {
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
            var grid = this.lookupReference('GRIDassetpic');
            grid.store.load();
        }
    },
    dogridclick:function(){
        this.displayOn(0);
    },
    donew:function(){
        
        this.displayOn(1);
        var form = this.lookupReference('FRMassetpic');
        form.getForm().reset();
        form.getForm().findField("PicName").focus();
    },
    dosave:function(){
        if (this.getdisplayon() === 0){
            return false;
        }
        var form = this.lookupReference('FRMassetpic');
        var valform = form.getForm().getValues();
        
        var st = form.getForm().findField('PicID').getValue();
        if(form.isValid()){
            if (st===''){
            TDK.view.temp.Run.proses('Assetpic/create',valform);
            }else{

                TDK.view.temp.Run.proses('Assetpic/update',valform);
            }
        }
        this.displayOn(0);
    },
    onRowdblclick: function(me, record, item, index) {
        this.displayOn(1);
        var form = this.lookupReference('FRMassetpic');
        form.getForm().setValues(record.getData());
        
    },
    
    dodelete:function(){
        if (this.getdisplayon() === 0){
            return false;
        }
        var form = this.lookupReference('FRMassetpic');
        var PicID = form.getForm().findField("PicID").getValue();
        
        var PicName = form.getForm().findField("PicName").getValue();
        if (PicID!=='') {
            Ext.MessageBox.confirm('Confirm', 'Delete PIC : ' + PicName + '?', 
            function(btnText){
                if(btnText === "yes"){
                    TDK.view.temp.Run.proses('Assetpic/delete',form.getForm().getValues());
                    this.donew();
                }
            }
            , this);
        }else{
            Ext.MessageBox.alert('Access Denied', 'Please select data', this.showResult, this);    
        }
    }
    
});