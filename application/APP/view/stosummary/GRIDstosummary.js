Ext.define('TDK.view.stosummary.GRIDstosummary', {
    extend: 'Ext.grid.Panel',
    alias:'widget.GRIDstosummary',
    reference:'GRIDstosummary',
    frame: false,
    border:false,
    autoLoad:true,
    plugins: 'gridfilters',
    store: {
        type: 'STstosummary',
        autoLoad:true
    },
    columns: [
        {xtype:'rownumberer'},
        {header: "Asset No.",dataIndex: 'assetno',width: 200,sortable: true,filter:'string'},
        {header: "Name",dataIndex: 'AssetName',flex: 1,sortable: true,filter:'string'},
        {header: "Location",dataIndex: 'AssetLocation',width: 200,sortable: true,filter:'string'},
        {header: "Location New",dataIndex: 'AssetLocationNew',width: 200,sortable: true,filter:'string'},
        {header: "Condition",dataIndex: 'AssetCondition',width: 200,sortable: true,filter:'string'},
        {header: "Condition New",dataIndex: 'AssetConditionNew',width: 200,sortable: true,filter:'string'},
        {header: "Remark",dataIndex: 'AssetRemark',width: 200,sortable: true,filter:'string'},
        {header: "User NIK",dataIndex: 'AssetScanUser',width: 200,sortable: true,filter:'string'},
        {header: "User Scan",dataIndex: 'AssetUsername',width: 200,sortable: true,filter:'string'},
        {header: "Scan Date",dataIndex: 'ScanDate',width: 200,sortable: true,filter:'string'},
        {header: "PIC",dataIndex: 'AssetPic',width: 200,sortable: true,filter:'string'},
        {header: "Info",dataIndex: 'AssetInfo',width: 200,sortable: true,filter:'string'}
        
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Displaying topics {0} - {1} of {2}',
        emptyMsg: "No topics to display",

    }
    
});