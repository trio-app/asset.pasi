Ext.define('TDK.view.stobypic.GRIDstobypic', {
    extend: 'Ext.grid.Panel',
    alias:'widget.GRIDstobypic',
    reference:'GRIDstobypic',
    frame: false,
    border:false,
    autoLoad:true,
    plugins: 'gridfilters',
    store: {
        type: 'STstobypic',
        autoLoad:true
    },
    columns: [
        {xtype:'rownumberer'},
        {header: "PIC",dataIndex: 'AssetPic',width: 200,sortable: true,filter:'string'},
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