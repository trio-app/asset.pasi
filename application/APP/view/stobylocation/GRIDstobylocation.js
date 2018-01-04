Ext.define('TDK.view.stobylocation.GRIDstobylocation', {
    extend: 'Ext.ux.ExportableGrid',
    alias:'widget.GRIDstobylocation',
    reference:'GRIDstobylocation',
    frame: false,
    border:false,
    autoLoad:true,
    plugins: 'gridfilters',
    store: {
        type: 'STstobylocation',
        autoLoad:true
    },
    columns: [
        {xtype:'rownumberer'},
        {header: "Asset Location",dataIndex: 'AssetLocation',width: 200,sortable: true,filter:'string'},
        {header: "Total Asset",dataIndex: 'TotalAsset',width: 200,sortable: true,filter:'string'},
        {header: "Scanned",dataIndex: 'AssetScanned',flex: 1,sortable: true,filter:'string'},
        {header: "Not Scanned",dataIndex: 'AssetNotScan',flex: 1,sortable: true,filter:'string'}
        
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Displaying topics {0} - {1} of {2}',
        emptyMsg: "No topics to display",

    }
    
});