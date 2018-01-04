  Ext.define('TDK.view.assetpic.FRMuploadpic', {
    extend: 'Ext.window.Window',
    alias:'widget.FRMuploadpic',
    reference:'FRMuploadpic',
    title: 'Upload Data PIC Asset',
    modal: true,
    items:[{
        height: 100,
        width: 600,
        xtype : 'form',
        layout: 'anchor',
        bodyStyle: {
          background: 'none',
          padding: '10px',
          border: '0'
        },
        defaults: {
          anchor: '100%',
        },
        items : [{
          xtype: 'filefield',
          name: 'fileexcel',
          fieldLabel: 'Lokasi File ',
          allowBlank:false
        },{
            xtype: 'box',
            html: '<span style="color:red;font-size:8pt;">*) Pastikan tipe cell menggunakan format text</span><br/>\n\
                    <span style="color:red;font-size:8pt;">*) Format sama dengan Table</span>'
        }],
        buttons: [{
                buttonAlign: 'center',
            text: 'Proses Upload',
            action: 'upload'
        }]  
      }],

    
    listeners:{
            'afterrender': function(panel){
                panel.setPosition(250,60);
            }
        }
});

