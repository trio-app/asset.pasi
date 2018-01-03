Ext.define('TDK.view.assetpic.FRMassetpic', {
    extend: 'Ext.form.Panel',
    alias:'widget.FRMassetpic',
    reference:'FRMassetpic',
    frame:false,
    border:false,
    bodyPadding: 10,
    
    fieldDefaults: {labelAlign: 'right',labelWidth: 100  },
    items: [{
        xtype: 'fieldset',
        title: 'Pic Asset',
        defaultType: 'textfield',
        items: [
            {  name: 'PicID',fieldLabel: 'PIC Id',width:200, hidden:true },
            {  name: 'PicName', fieldLabel: 'Name', width:300,allowBlank: false},
            {  name: 'PicDescription', fieldLabel: 'Description',width:300,allowBlank: true }
        ]
    }]
    
});

