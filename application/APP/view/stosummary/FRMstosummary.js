Ext.define('TDK.view.stosummary.FRMstosummary', {
    extend: 'Ext.form.Panel',
    alias:'widget.FRMstosummary',
    reference:'FRMstosummary',
    frame:true,
    border:false,
    bodyPadding: 10,
    
    fieldDefaults: {labelAlign: 'right',labelWidth: 100  },
    items: [{
        xtype: 'fieldset',
        title: 'STO SUMMARY',
        defaultType: 'textfield',
        items: [
            {  xtype: 'box',html: '<p>Klik Tombol "<b>Refresh Data</b>" untuk Menampilkan Data Summary'},
            {  name: 'total', fieldLabel: 'Total Asset', width:300, readOnly: true, value: ''},
            {  name: 'scan', fieldLabel: 'Scanned', width:300, readOnly: true, value: '' },
            {  name: 'notscan', fieldLabel: 'Not Scanned', width:300, readOnly: true, value: '', fieldStyle: 'background-color: #ffa144; background-image: none;' },
            {  xtype: 'button', text: 'Refresh Data', action: 'refreshdata', scale: 'large', width: 300, margin: '0 0 10 0'}
            
        ]
    }]
    
});

