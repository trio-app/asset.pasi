Ext.define('TDK.view.assetsublocation.GRIDassetsublocation', {
    extend: 'Ext.grid.Panel',
    alias:'widget.GRIDassetsublocation',
    reference:'GRIDassetsublocation',
    frame: false,
    border:false,
    autoLoad:true,
    plugins: 'gridfilters',
    store: {
        type: 'STassetsublocation',
        autoLoad:true
    },
    columns: [
        {xtype:'rownumberer'},
        {header: "Location Name",dataIndex: 'LocName',width: 200,sortable: true,filter:'string'},
        {header: "Sub Location Name",dataIndex: 'SubLocname',width: 200,sortable: true,filter:'string'},
        {header: "Description",dataIndex: 'SubDescription',flex: 1,sortable: true,filter:'string'}
        
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Displaying topics {0} - {1} of {2}',
        emptyMsg: "No topics to display",

    }
    
});