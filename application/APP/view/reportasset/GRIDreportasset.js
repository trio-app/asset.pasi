Ext.define('TDK.view.reportasset.GRIDreportasset', {
    extend: 'Ext.ux.ExportableGrid',
    alias:'widget.GRIDreportasset',
    reference:'GRIDreportasset',
    frame: false,
    border:false,
    autoLoad:true,
    plugins: 'gridfilters',
    store: {
        type: 'STtassetdata',
        autoLoad:true
    },
    columns: [
        {xtype: 'rownumberer', width:35},
        { header: 'Asset ID',dataIndex:'AssetID',hidden:true},
        { header: 'Asset Info',dataIndex:'AssetInfo',width:100,locked   : true, filter: 'string'},
        { header: 'Asset No',dataIndex:'AssetNo',width:70,locked   : true, filter: 'string'},
        { header: 'No. SAP',dataIndex:'AssetSAPNo',width:100, filter: 'string'},
        { header: 'Asset Key',dataIndex:'AssetKey',width:100, filter: 'string'},
        { header: 'Asset Name',dataIndex:'AssetName',width:250, filter: 'string'},
        //{ header: 'No. Reg Dept',dataIndex:'AssetNoRegDept',width:100, filter: 'string'},
        { header: 'PIC',dataIndex:'AssetPic',width:100, filter: 'string'},
        { header: 'Group',dataIndex:'AssetGroup',width:100, filter: 'string'},
        { header: 'Category',dataIndex:'AssetCategory',width:100, filter: 'string'},
        { header: 'Location',dataIndex:'AssetLocation',width:100, filter: 'string'},
        { header: 'Sub Location',dataIndex:'AssetSublocation',width:100, filter: 'string'},
        { header: 'Condition',dataIndex:'AssetCondition',width:100, filter: 'string'},
        { header: 'Label',dataIndex:'AssetLabel',width:100, filter: 'string'},
        { header: 'Aquisition Date',dataIndex:'AssetAquisitiondate',width:100, filter: 'string'},
        { header: 'Remark',dataIndex:'AssetRemark',width:100, filter: 'string'},
        //{ header: 'Cost Center',dataIndex:'AssetCostcenter',width:100, filter: 'string'},
        { header: 'Asset Cost',dataIndex:'AssetCost',width:100, xtype: 'numbercolumn', filter: 'string'},
        
    ]
});

