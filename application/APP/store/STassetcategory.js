  Ext.define('TDK.store.STassetcategory', {
    extend  : 'Ext.data.Store',
    model   : 'TDK.model.MODassetcategory',
    alias : 'store.STassetcategory',
    autoLoad : true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        actionMethods: {create: 'POST',read: 'POST',update: 'POST',destroy: 'POST'},
        api: {
            create: base_url + 'assetcategory/create',
            read: base_url + 'assetcategory/read',
            update: base_url + 'assetcategory/update'
        },
        reader: {
            type: 'json',
            rootProperty: 'Rows',
            totalProperty: 'TotalRows',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: false
        }
    }
  });