Ext.define('TDK.view.assetgroup.FRMassetgroup', {
    extend: 'Ext.form.Panel',
    alias:'widget.FRMassetgroup',
    reference:'FRMassetgroup',
    frame:false,
    border:false,
    bodyPadding: 10,
    
    fieldDefaults: {labelAlign: 'right',labelWidth: 100  },
    items: [{
        xtype: 'fieldset',
        title: 'Group Asset',
        defaultType: 'textfield',
        items: [
            {  name: 'GroupID',fieldLabel: 'Group Id',width:200, hidden:true },
            {  name: 'GroupName', fieldLabel: 'Name', width:300,allowBlank: false},
            {  name: 'GroupDescription', fieldLabel: 'Description',width:300,allowBlank: true }
        ]
    }]
    
});

