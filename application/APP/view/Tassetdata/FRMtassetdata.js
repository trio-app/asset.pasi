Ext.define('TDK.view.Tassetdata.FRMtassetdata', {
    extend: 'Ext.form.Panel',
    alias:'widget.FRMtassetdata',
    reference:'FRMtassetdata',
    frame:false,
    border:false,
    bodyPadding: 10,
    
    fieldDefaults: {labelAlign: 'right',labelWidth: 100  },
    items: [{
        xtype: 'fieldset',
        title: 'Asset Information',
        defaultType: 'textfield',
        defaults: {
            labelWidth: 120,
            margin: '0 0 5 0'
        },
        items: [
            {  name: 'AssetID',fieldLabel: 'Asset ID ',width:200, hidden:true },
            { xtype: 'container', layout: 'hbox',
                defaults: {
                    margin: '0 5 5 0',
                    labelWidth: 120,
                    xtype: 'textfield'
                },
                items: [
                    {  name: 'AssetInfo', fieldLabel: 'Asset Type ', width:300, xtype: 'combo', forceSelection: true, allowBlank: false, store:['ASSET','INVENTARIS']},
                    {  name: 'AssetNo', fieldLabel: 'Asset/Inventaris No. ', width:300,allowBlank: false},
                ]
            },
            { xtype: 'container', layout: 'hbox',
                defaults: {
                    margin: '0 5 5 0',
                    xtype: 'textfield'
                },
                items: [
                    {  name: 'AssetKey', fieldLabel: 'Asset Key ', width:350,allowBlank: false, labelWidth: 120},
                    {  name: 'AssetSAPNo', fieldLabel: 'SAP No. ',width:250,allowBlank: false },
                ]
            },
            { name: 'AssetName', fieldLabel: 'Asset Name ',width:605,allowBlank: false, margin: '0 0 10 0' },
            { xtype: 'container', layout: 'hbox',
                defaults: {
                    labelWidth: 120,
                    margin: '0 5 5 0',
                    xtype: 'textfield'
                },
                items: [
                    {  name: 'AssetPic', fieldLabel: 'PIC ', width:300, xtype: 'combo', forceSelection: true, allowBlank: false, store:['ASSET','INVENTARIS']},
                    {  name: 'AssetGroup', fieldLabel: 'Group ', width:300, xtype: 'combo', forceSelection: true, allowBlank: false, valueField :'GroupName', displayField: 'GroupName',  queryMode:'local', store: { type: 'STassetgroup'} }
                ]
            },
            { xtype: 'container', layout: 'hbox',
                defaults: {
                    labelWidth: 120,
                    margin: '0 5 5 0',
                    xtype: 'textfield'
                },
                items: [
                    {  name: 'AssetCategory', fieldLabel: 'Category ', width:300, xtype: 'combo', forceSelection: true, allowBlank: false, store:['ASSET','INVENTARIS']},
                    {  name: 'AssetCost', fieldLabel: 'Asset Cost ', width:300, xtype: 'numberfield', allowBlank: false, minValue: 0}
                ]
            },
            { xtype: 'container', layout: 'hbox',
                defaults: {
                    labelWidth: 120,
                    margin: '0 5 5 0',
                    xtype: 'textfield'
                },
                items: [
                    {  name: 'AssetLocation', fieldLabel: 'Location ', width:300, xtype: 'combo', forceSelection: true, allowBlank: false, store:['ASSET','INVENTARIS']},
                    {  name: 'AssetSublocation', fieldLabel: 'Sub Location ', width:300, allowBlank: false}
                ]
            },
            { xtype: 'container', layout: 'hbox',
                defaults: {
                    labelWidth: 120,
                    margin: '0 5 5 0',
                    xtype: 'textfield'
                },
                items: [
                    {  name: 'AssetCondition', fieldLabel: 'Condition ', width:300, xtype: 'combo', forceSelection: true, allowBlank: false, store:['ASSET','INVENTARIS']},
                    {  name: 'AssetAquisitiondate', fieldLabel: 'Aquisition Date ', width:300, xtype: 'datefield',format: 'Y-m-d',submitFormat: 'Y-m-d', allowBlank: false}
                ]
            },
            { xtype: 'container', layout: 'hbox',
                defaults: {
                    labelWidth: 120,
                    margin: '0 5 5 0',
                    xtype: 'textfield'
                },
                items: [
                    {  name: 'AssetRemark', fieldLabel: 'Remark ', width:350, height: 60, xtype: 'textareafield', allowBlank: false},
                    {  name: 'AssetLabel', fieldLabel: 'Type Label ', width:250, xtype: 'combo', forceSelection: true, allowBlank: false, store:['BESAR','KECIL']},
                ]
            },
            
        ]
    }]
    
});

