Ext.define('TDK.model.MODstobygroup', {
    extend: 'Ext.data.Model',
    fields: ['AssetGroup',{name: 'TotalAsset', type: 'int'},{name:'AssetScanned', type: 'int'},{name: 'AssetNotScan', type: 'int'}]
});