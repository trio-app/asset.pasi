Ext.define('TDK.view.assetlocation.FRMassetlocation', {
    extend: 'Ext.form.Panel',
    alias:'widget.FRMassetlocation',
    reference:'FRMassetlocation',
    frame:false,
    border:false,
    bodyPadding: 10,
    
    fieldDefaults: {labelAlign: 'right',labelWidth: 100  },
    items: [{
        xtype: 'fieldset',
        title: 'Location Asset',
        defaultType: 'textfield',
        items: [
            {  name: 'LocID',fieldLabel: 'Group Id',width:200, hidden:true },
            {  name: 'LocName', fieldLabel: 'Name', width:300,allowBlank: false},
            {  name: 'LocDescription', fieldLabel: 'Description',width:300,allowBlank: true }
        ]
    }]
    
});

