<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <title></title>
    
    <link  href="<?php echo extjs_url().'build/classic/theme-classic/resources/theme-classic-all.css'; ?>" rel="stylesheet" />
    <script src="<?php echo extjs_url().'build/ext-all-debug.js'; ?>"></script>
    <script src="<?php echo extjs_url().'build/classic/theme-classic/theme-classic.js'; ?>"></script>
    <script type="text/javascript">
        var baseurl = '<?php echo base_url(); ?>';
        var extjsurl = '<?php echo extjs_url(); ?>';
        var APPversion = 'Fixed Asset - PASI (1.0.0)';
        window.document.title = APPversion;
    </script>
    <script type="text/javascript">
        Ext.Loader.setConfig({enabled: true});     
        Ext.onReady(function() {
        var padding = 5;

        var form = Ext.create('Ext.form.Panel', {
            border: false,
            position:'fix',
            id:'formlogin',
            layout:{
                type:'vbox',
                pack:'center'
            },
            fieldDefaults: {
                labelWidth: 80
            },
            defaultType: 'textfield',
            bodyPadding: padding,
            items: [{
                        xtype: 'image',
                        width: 100,
                        height: 50,
                        margin:'0 0 0 50',
                        src: '<?php echo base_url(); ?>system/image/pemilogo.jpg'
                    },{
                        xtype: 'container',
                        defaultType: 'textfield',   
                        layout:'vbox',
                        items: [
                            {fieldLabel: 'User Login',labelAlign:'top',name: 'userLogin',
                                allowBlank: false,margins: '0 10 0 0',width:200}, 
                            {fieldLabel: 'Password',labelAlign:'top',name: 'userPassword',
                                allowBlank: false,width:200}
                         ]
                    }]
        });

        var win = Ext.create('Ext.window.Window', {
            title: APPversion,
            closable:false,
            draggable:false,
            resizable: false,
            width: 250,
            height: 250,
            layout: 'fit',
            items: form,
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                ui: 'footer',
                items: [
                    {
                        xtype:'tbspacer',
                        flex:1
                    },{
                    xtype:'button',
                    minWidth: 80,
                    text: 'Login',
                    Id:'login',
                    x:250,
                    y:200,
                    formBind:true,
                    handler: function(btn) {
                        var selection = Ext.getCmp('formlogin').getForm().getFieldValues();

                            if (Ext.getCmp('formlogin').getForm().isValid()) {
                                Ext.Ajax.request({
                                    url: baseurl + 'Login/signin',
                                    method: 'POST',
                                    params: JSON.stringify(Ext.getCmp('formlogin').getForm().getFieldValues()),
                                    success: function(response){
                                        if (response.responseText=='success'){
                                            Ext.Msg.alert("WELCOME","Login Success <p>" + selection.userLogin + "</p>");
                                            window.location.assign(baseurl + 'Home');
                                        }else{
                                            Ext.Msg.alert("FAILED","Login : " + selection.userLogin + " Not Found" );
                                        }
                                    },
                                    failure: function(response){
                                        Ext.Msg.alert('server-side failure with status code ' + response.status);
                                    }
                                });
                            }
                        }
                }]
            }]
        });

        win.show();


        Ext.create('Ext.container.Viewport', {
                layout: 'border',
                items: [ {
                    region: 'center',//tengah
                    xtype: 'tabpanel', // TabPanel itself has no title
                    activeTab: 0,      // First tab active by default
                    margins: '5 0 5 5',
                    id : 'contentTAB'

                }]
        });
    });  
    </script>

</head>
    <body>
        <div id="login"></div>
    </body>
</html>