Ext.define('TDK.view.reportsto.GRIDreportsto', {
    extend: 'Ext.ux.ExportableGrid',
    alias:'widget.GRIDreportsto',
    reference:'GRIDreportsto',
    frame: false,
    border:false,
    autoLoad:true,
    plugins: 'gridfilters',
    store: {
        type: 'STassetstoall',
        autoLoad:true
    },
    columns: [
        { xtype: 'rownumberer', width: 35},
        { header: 'Asset ID',dataIndex:'AssetID',filter: 'string',hidden:true},
        { header: 'Asset No',dataIndex:'AssetNo',filter: 'string', width: 70, locked: true},
        //{ header: 'Asset No Reg Dept',dataIndex:'AssetNoRegDept',filter: 'string',width:120,locked   : true},
        { header: 'Asset Key',dataIndex:'AssetKey',filter: 'string',width:250,locked   : true},
        { header: 'Asset Name',dataIndex:'AssetName',filter: 'string',width:100,locked:false},
        { header: 'Group',dataIndex:'AssetGroup',filter: 'string',width:100},
        { header: 'Category',dataIndex:'AssetCategory',filter: 'string',width:100},
        { header: 'PIC',dataIndex:'AssetPic',filter: 'string',width:100},
        { header: 'Location',dataIndex:'AssetLocation',filter: 'string',width:100},
        { header: 'Location New',dataIndex:'AssetLocationNew',filter: 'string',width:100},
        { header: 'Sub Location',dataIndex:'AssetSublocation',filter: 'string',width:100},
        { header: 'Condition',dataIndex:'AssetCondition',filter: 'string',width:100},
        { header: 'Condition New',dataIndex:'AssetConditionNew',filter: 'string',width:100},
        { header: 'Remark',dataIndex:'AssetRemark',filter: 'string',width:100},
        { header: 'User NIK',dataIndex:'AssetScanUser',filter: 'string',width:100},
        { header: 'User Scan',dataIndex:'AssetUsername',filter: 'string',width:100},
        { header: 'Scan Date',dataIndex:'ScanDate',filter: 'string',width:100},
        { header: 'Upload Date',dataIndex:'SystemDate',filter: 'string',width:100},
        { header: 'Asset Info',dataIndex:'AssetInfo',filter: 'string',width:100},        
    ]
});

