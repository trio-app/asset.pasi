Ext.define('TDK.model.MODstobypic', {
    extend: 'Ext.data.Model',
    fields: ['AssetPic',{name: 'TotalAsset', type: 'int'},{name:'AssetScanned', type: 'int'},{name: 'AssetNotScan', type: 'int'}]
});