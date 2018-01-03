  Ext.define('TDK.store.STassetgroup', {
    extend  : 'Ext.data.Store',
    model   : 'TDK.model.MODassetgroup',
    alias : 'store.STassetgroup',
    autoLoad : true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        actionMethods: {create: 'POST',read: 'POST',update: 'POST',destroy: 'POST'},
        api: {
            create: base_url + 'Modjs/jsondata/mgroup/create',
            read: base_url + 'Modjs/jsondata/mgroup/read',
            update: base_url + 'Modjs/jsondata/mgroup/update'
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