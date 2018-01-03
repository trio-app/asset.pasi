Ext.define('TDK.view.assetgroup.GRIDassetgroup', {
    extend: 'Ext.grid.Panel',
    alias:'widget.GRIDassetgroup',
    reference:'GRIDassetgroup',
    frame: false,
    border:false,
    autoLoad:true,
    plugins: 'gridfilters',
    store: {
        type: 'STassetgroup',
        autoLoad:true
    },
    columns: [
        {xtype:'rownumberer'},
        {header: "Name",dataIndex: 'GroupName',width: 200,sortable: true,filter:'string'},
        {header: "Description",dataIndex: 'GroupDescription',flex: 1,sortable: true,filter:'string'}
        
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Displaying topics {0} - {1} of {2}',
        emptyMsg: "No topics to display",

    }
    
});