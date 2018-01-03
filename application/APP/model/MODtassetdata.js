Ext.define('TDK.model.MODtassetdata', {
    extend: 'Ext.data.Model',
    fields: ['AssetID','AssetNo','AssetNoRegDept','AssetKey','AssetSAPNo','AssetName','AssetGroup','AssetCategory','AssetLocation','AssetSublocation','AssetCostcenter','AssetPic','AssetCondition','AssetRemark','AssetInfo','AssetAquisitiondate','AssetLabel',{name: 'AssetCost', type: 'float'}]
});

