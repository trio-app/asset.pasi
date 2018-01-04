Ext.define('TDK.model.MODstobylocation', {
    extend: 'Ext.data.Model',
    fields: ['AssetLocation',{name: 'TotalAsset', type: 'int'},{name:'AssetScanned', type: 'int'},{name: 'AssetNotScan', type: 'int'}]
});