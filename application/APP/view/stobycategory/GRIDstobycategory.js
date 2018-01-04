Ext.define('TDK.view.stobycategory.GRIDstobycategory', {
    extend: 'Ext.ux.ExportableGrid',
    alias:'widget.GRIDstobycategory',
    reference:'GRIDstobycategory',
    frame: false,
    border:false,
    autoLoad:true,
    plugins: 'gridfilters',
    store: {
        type: 'STstobycategory',
        autoLoad:true
    },
    columns: [
        {xtype:'rownumberer'},
        {header: "Asset Category",dataIndex: 'AssetCategory',width: 200,sortable: true,filter:'string'},
        {header: "Total Asset",dataIndex: 'TotalAsset',width: 200,sortable: true,filter:'string'},
        {header: "Scanned",dataIndex: 'AssetScanned',flex: 1,sortable: true,filter:'string'},
        {header: "Not Scanned",dataIndex: 'AssetNotScan',flex: 1,sortable: true,filter:'string'}   
    ]
});