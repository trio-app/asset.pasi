Ext.define('TDK.model.MODstobycategory', {
    extend: 'Ext.data.Model',
    fields: ['AssetCategory',{name: 'TotalAsset', type: 'int'},{name:'AssetScanned', type: 'int'},{name: 'AssetNotScan', type: 'int'}]
});