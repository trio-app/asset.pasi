Ext.define('TDK.view.assetsublocation.FRMassetsublocation', {
    extend: 'Ext.form.Panel',
    alias:'widget.FRMassetsublocation',
    reference:'FRMassetsublocation',
    frame:false,
    border:false,
    bodyPadding: 10,
    
    fieldDefaults: {labelAlign: 'right',labelWidth: 100  },
    items: [{
        xtype: 'fieldset',
        title: 'Sub Location Asset',
        defaultType: 'textfield',
        items: [
            {  name: 'SublocID',fieldLabel: 'SubLoc Id',width:200, hidden:true },
            {  xtype: 'combo', displayField: 'LocName', valueField: 'LocName', queryMode: 'local', forceSelection: true, name: 'LocName', fieldLabel: 'Location Name', width:300,allowBlank: false, store: {type: 'STassetlocation'} },
            {  name: 'SubLocname', fieldLabel: 'Sub Location Name', width:300,allowBlank: false},
            {  name: 'SubDescription', fieldLabel: 'Description',width:300,allowBlank: true }
        ]
    }]
    
});

