Ext.define('TDK.controller.Cassetgroup', {
    extend: 'Ext.app.ViewController',
    alias:'controller.Cassetgroup',
    
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
            'trickmenu button[pid=upload]':{
              click: this.douploadview
            },
            'trickmenu button[pid=gridtable]':{
              click: this.dogridclick
            },
            'GRIDassetgroup': {
                itemdblclick: this.onRowdblclick
            },
            'FRMuploadgroup > form button[action=upload]': {
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
            var grid = this.lookupReference('GRIDassetgroup');
            grid.store.load();
        }
    },
    dogridclick:function(){
        this.displayOn(0);
    },
    donew:function(){
        
        this.displayOn(1);
        var form = this.lookupReference('FRMassetgroup');
        form.getForm().reset();
        form.getForm().findField("GroupName").focus();
    },
    dosave:function(){
        if (this.getdisplayon() === 0){
            return false;
        }
        var form = this.lookupReference('FRMassetgroup');
        var valform = form.getForm().getValues();
        
        var st = form.getForm().findField('GroupID').getValue();
        if(form.isValid()){
            if (st===''){
            TDK.view.temp.Run.proses('Assetgroup/create',valform);
            }else{

                TDK.view.temp.Run.proses('Assetgroup/update',valform);
            }
        }
        this.displayOn(0);
    },
    onRowdblclick: function(me, record, item, index) {
        this.displayOn(1);
        var form = this.lookupReference('FRMassetgroup');
        form.getForm().setValues(record.getData());
    },
    douploadview: function(){
        this.getView().add({
            xtype : 'FRMuploadgroup'
        }).show();
    },
    uploadexcel: function(){
        var form = this.lookupReference('FRMuploadgroup');
        var grid = this.lookupReference('GRIDassetgroup');
        if(form.down('form').isValid()){
            form.down('form').submit({
                url: base_url+'Assetgroup/uploadfile',
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
        var form = this.lookupReference('FRMassetgroup');
        var groupID = form.getForm().findField("GroupID").getValue();
        
        var GroupName = form.getForm().findField("GroupName").getValue();
        if (groupID!=='') {
            Ext.MessageBox.confirm('Confirm', 'Delete Group : ' + GroupName + '?', 
            function(btnText){
                if(btnText === "yes"){
                    TDK.view.temp.Run.proses('Assetgroup/delete',form.getForm().getValues());
                    this.donew();
                }
            }
            , this);
        }else{
            Ext.MessageBox.alert('Access Denied', 'Please select data', this.showResult, this);    
        }
    }
    
});