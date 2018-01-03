  Ext.define('TDK.store.STassetpic', {
    extend  : 'Ext.data.Store',
    model   : 'TDK.model.MODassetpic',
    alias : 'store.STassetpic',
    autoLoad : true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        actionMethods: {create: 'POST',read: 'POST',update: 'POST',destroy: 'POST'},
        api: {
            create: base_url + 'Assetpic/create',
            read: base_url + 'Assetpic/read',
            update: base_url + 'Assetpic/update'
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