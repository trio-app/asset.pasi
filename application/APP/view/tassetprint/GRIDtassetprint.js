Ext.define('TDK.view.tassetprint.GRIDtassetprint', {
    extend: 'Ext.grid.Panel',
    alias:'widget.GRIDtassetprint',
    reference:'GRIDtassetprint',
    frame: false,
    border:false,
    autoLoad:true,
    plugins: 'gridfilters',
    store: {
        type: 'STtassetdata',
        autoLoad:true
    },
    selModel: 'checkboxmodel' ,
    selType: 'cellmodel' ,
    viewConfig: {
        stripeRows: true,
        multiSelect: true,
        enableTextSelection: true
    },
    columns: [
            { header: 'No.', xtype: 'rownumberer',width:35},
            { header: 'Asset No',dataIndex:'AssetNo',width:100,locked : true, filter: 'string'},
            { header: 'Asset Name',dataIndex:'AssetName',width:250,locked : true, filter: 'string'},
            { header: 'Asset Key',dataIndex:'AssetKey',width:100, filter: 'string'},
            //{ header: 'No. Reg Dept',dataIndex:'AssetNoRegDept',width:100, filter: 'string'},
            { header: 'Group',dataIndex:'AssetGroup',width:100, filter: 'string'},
            { header: 'Category',dataIndex:'AssetCategory',width:100, filter: 'string'},
            { header: 'Location',dataIndex:'AssetLocation',width:100, filter: 'string'},
            { header: 'Sub Location',dataIndex:'AssetSublocation',width:100, filter: 'string'},
            { header: 'PIC',dataIndex:'AssetPic',width:100, filter: 'string'},
            { header: 'Condition',dataIndex:'AssetCondition',width:100, filter: 'string'},
            { header: 'Remark',dataIndex:'AssetRemark',width:100, filter: 'string'},
            { header: 'Aquisition Date',dataIndex:'AssetAquisitiondate',width:100, filter: 'string'},
            { header: 'Label',dataIndex:'AssetLabel',width:100, filter: 'string'},
            { header: 'Asset Info',dataIndex:'AssetInfo',width:100, filter: 'string'}        
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Displaying topics {0} - {1} of {2}',
        emptyMsg: "No topics to display",

    }
    
});

