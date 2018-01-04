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
            'trickmenu button[pid=upload]':{
              click: this.douploadview
            },
            'GRIDassetlocation': {
                itemdblclick: this.onRowdblclick
            },
            'FRMuploadlocation > form button[action=upload]': {
                click: this.uploadexcel
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
            TDK.view.temp.Run.proses('Assetlocation/create',valform);
            }else{

                TDK.view.temp.Run.proses('Assetlocation/update',valform);
            }
        }
        this.displayOn(0);
    },
    onRowdblclick: function(me, record, item, index) {
        this.displayOn(1);
        var form = this.lookupReference('FRMassetlocation');
        form.getForm().setValues(record.getData());
        
    },
    douploadview: function(){
        this.getView().add({
            xtype : 'FRMuploadlocation'
        }).show();
    },
    uploadexcel: function(){
        var form = this.lookupReference('FRMuploadlocation');
        var grid = this.lookupReference('GRIDassetlocation');
        if(form.down('form').isValid()){
            form.down('form').submit({
                url: base_url+'Assetlocation/uploadfile',
                waitMsg: 'Uploading your file...',
                scope:this,
                success: function(fp, action){
                   var data = Ext.decode(action.response.responseText);
                   Ext.MessageBox.alert("Success: " , data.msg);
                   form.close();
                   grid.store.load();
                    
                },
                failure : function(fp,action)
                {
                    var data = Ext.decode(action.response.responseText);
                    Ext.MessageBox.alert("Failure: " , data.msg);
                }
            });
        }
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
                    TDK.view.temp.Run.proses('Assetlocation/delete',form.getForm().getValues());
                    this.donew();
                }
            }
            , this);
        }else{
            Ext.MessageBox.alert('Access Denied', 'Please select data', this.showResult, this);    
        }
    }
    
});