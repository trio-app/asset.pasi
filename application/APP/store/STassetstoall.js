  Ext.define('TDK.store.STassetstoall', {
    extend: 'Ext.data.Store',
    alias: 'store.STassetstoall',
    model: 'TDK.model.MODassetstoall',
    proxy: {
        type: 'ajax',
        actionMethods: {create: 'POST',read: 'POST',update: 'POST',destroy: 'POST'},
        api: {
            create: base_url + 'Appinv/modjson/assetstoall/create',
            read: base_url + 'Assetstoall/read',
            update: base_url + 'Appinv/modjson/assetstoall/update'
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
    },
    remoteSort: false,
    sorters: [{
        property: 'assetName',
        direction: 'ASC'
    }],
    pageSize: 50
  });

