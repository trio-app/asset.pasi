Ext.define('TDK.view.assetcategory.GRIDassetcategory', {
    extend: 'Ext.grid.Panel',
    alias:'widget.GRIDassetcategory',
    reference:'GRIDassetcategory',
    frame: false,
    border:false,
    autoLoad:true,
    plugins: 'gridfilters',
    store: {
        type: 'STassetcategory',
        autoLoad:true
    },
    columns: [
        {xtype:'rownumberer'},
        {header: "Name",dataIndex: 'CategoryName',width: 200,sortable: true,filter:'string'},
        {header: "Description",dataIndex: 'CategoryDescription',flex: 1,sortable: true,filter:'string'}
        
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Displaying topics {0} - {1} of {2}',
        emptyMsg: "No topics to display",

    }
    
});