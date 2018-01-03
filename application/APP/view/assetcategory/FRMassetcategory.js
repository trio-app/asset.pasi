Ext.define('TDK.view.assetcategory.FRMassetcategory', {
    extend: 'Ext.form.Panel',
    alias:'widget.FRMassetcategory',
    reference:'FRMassetcategory',
    frame:false,
    border:false,
    bodyPadding: 10,
    
    fieldDefaults: {labelAlign: 'right',labelWidth: 100  },
    items: [{
        xtype: 'fieldset',
        title: 'Category Asset',
        defaultType: 'textfield',
        items: [
            {  name: 'CategoryID',fieldLabel: 'Category Id',width:200, hidden:true },
            {  name: 'CategoryName', fieldLabel: 'Name', width:300,allowBlank: false},
            {  name: 'CategoryDescription', fieldLabel: 'Description',width:300,allowBlank: true }
        ]
    }]
    
});

