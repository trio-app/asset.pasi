Ext.define('TDK.view.assetpic.GRIDassetpic', {
    extend: 'Ext.grid.Panel',
    alias:'widget.GRIDassetpic',
    reference:'GRIDassetpic',
    frame: false,
    border:false,
    autoLoad:true,
    plugins: 'gridfilters',
    store: {
        type: 'STassetpic',
        autoLoad:true
    },
    columns: [
        {xtype:'rownumberer'},
        {header: "Name",dataIndex: 'PicName',width: 200,sortable: true,filter:'string'},
        {header: "Description",dataIndex: 'PicDescription',flex: 1,sortable: true,filter:'string'}
        
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Displaying topics {0} - {1} of {2}',
        emptyMsg: "No topics to display",

    }
    
});