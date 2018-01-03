Ext.define('TDK.controller.Cmainpage', {
    extend: 'Ext.app.ViewController',
    alias:'controller.Cmainpage',
    init: function (view) {
        
        this.control({
            'mainlogin button[pid=btlogin]':{
              click: this.dologin
            },
            'container':{
                activate:this.renderlogin
            },
            'mainpage':{
                afterrender:this.rendermainpage
            },
            'mainpage > #nav':{
                itemclick: this.onMenuItemClick
            },
            'mainpage > #nav button[pid=logout]':{
                click:this.logout
            }
            
        });
        //this.renderpage();
    },
    logout:function(){
        var panel = this.getView();
        panel.setActiveItem(0);
        TDK.view.temp.Run.proses('Home/logout',"");
    },
    onMenuItemClick:function(view,rec){
      if ( rec.raw.getclick=== false) return;
        var id = rec.raw.id;
        var cls = "TDK.view." + id + '.' + id;
        var tabs = this.lookupReference('menutab');
        var tab = tabs.child('#' + id);
 
        if (!tab) {
            tab = tabs.add(Ext.create(cls, {
                waitMsgTarget: true,
                itemId: id,
                closable: true,
                title: rec.get('text')
            }));
        }
        tabs.setActiveTab(tab); 
    },
    renderpage:function(){
        
        var panel = this.getView();
        if (Varconfig.UserLogin =="") {
            panel.setActiveItem(0);
            var form = this.lookupReference('mainlogin');
            form.getForm().findField('userLogin').focus(true);      
        }else{
            panel.setActiveItem(1);
        }
      
    },
    dologin:function(){
         var form = this.lookupReference('mainlogin');
         
         if(form.isValid()){
            Ext.Ajax.request({
                url: base_url + 'Home/login',
                method: 'POST',
                params: form.getForm().getValues(),
                success: function(response){
                    var data = Ext.decode(response.responseText);
                    Ext.toast({
                        html: data.message,
                        title: 'Process Notification',
                        width: 200,
                        align: 't'
                    }); 
                    if (data.message == 'Login Success'){
                        window.location.href = base_url ;
                    }

                },
                failure: function(){

                    Ext.toast({
                        html: 'Please Check Connection',
                        title: 'Error Notification',
                        width: 200,
                        align: 't'
                    }); 
                }
            });
         }
        
        
        
        
        
    }
    
    
});