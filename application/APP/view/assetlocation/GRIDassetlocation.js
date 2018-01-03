Ext.define('TDK.view.assetlocation.GRIDassetlocation', {
    extend: 'Ext.grid.Panel',
    alias:'widget.GRIDassetlocation',
    reference:'GRIDassetlocation',
    frame: false,
    border:false,
    autoLoad:true,
    plugins: 'gridfilters',
    store: {
        type: 'STassetlocation',
        autoLoad:true
    },
    columns: [
        {xtype:'rownumberer'},
        {header: "Name",dataIndex: 'LocName',width: 200,sortable: true,filter:'string'},
        {header: "Description",dataIndex: 'LocDescription',flex: 1,sortable: true,filter:'string'}
        
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Displaying topics {0} - {1} of {2}',
        emptyMsg: "No topics to display",

    }
    
});