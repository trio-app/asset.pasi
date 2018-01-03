  Ext.define('TDK.store.STassetlocation', {
    extend  : 'Ext.data.Store',
    model   : 'TDK.model.MODassetlocation',
    alias : 'store.STassetlocation',
    autoLoad : true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        actionMethods: {create: 'POST',read: 'POST',update: 'POST',destroy: 'POST'},
        api: {
            create: base_url + 'assetlocation/create',
            read: base_url + 'assetlocation/read',
            update: base_url + 'assetlocation/update'
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