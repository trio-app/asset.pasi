Ext.define('TDK.view.assetstoall.GRIDassetstoall', {
    extend: 'Ext.grid.Panel',
    alias:'widget.GRIDassetstoall',
    reference:'GRIDassetstoall',
    frame: false,
    border:false,
    autoLoad:true,
    plugins: 'gridfilters',
    store: {
        type: 'STassetstoall',
        autoLoad:true
    },
    viewConfig: {
        getRowClass: function(record) {
            if(record && record.get('AssetScanUser') ===  '') return 'no-scan';
        },
    },
    columns: [
        { xtype: 'rownumberer', width: 35},
        { header: 'Asset No. ',dataIndex:'assetno',filter: 'string', locked: true},
        { header: 'Name',dataIndex:'AssetName',filter: 'string', locked: true, width: 200},
        { header: 'Location',dataIndex:'AssetLocation',filter: 'string'},
        { header: 'Location New',dataIndex:'AssetLocationNew',filter: 'string'},
        { header: 'Condition',dataIndex:'AssetCondition',filter: 'string'},
        { header: 'Condition New',dataIndex:'AssetConditionNew',filter: 'string'},
        { header: 'Remark',dataIndex:'AssetRemark',filter: 'string'},
        { header: 'User NIK',dataIndex:'AssetScanUser',filter: 'string'},
        { header: 'User Scan',dataIndex:'AssetUsername',filter: 'string'},
        { header: 'Scan Date',dataIndex:'ScanDate',filter: 'string'},
        { header: 'PIC',dataIndex:'AssetPic',filter: 'string'},
        { header: 'Info',dataIndex:'AssetInfo',filter: 'string'},        
    ]
});

