Ext.define('TDK.view.temp.Run',{
    singleton: true,
    
    proses: function(url,param) {
        Ext.Ajax.request({
            url: url,
            method: 'POST',
            params: param,
            success: function(response){
                var data = Ext.decode(response.responseText);
                Ext.toast({
                    html: data.message,
                    title: 'Process Notification',
                    width: 200,
                    align: 't'
                }); 
                
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
});