  Ext.define('TDK.store.STassetsublocation', {
    extend  : 'Ext.data.Store',
    model   : 'TDK.model.MODassetsublocation',
    alias : 'store.STassetsublocation',
    autoLoad : true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        actionMethods: {create: 'POST',read: 'POST',update: 'POST',destroy: 'POST'},
        api: {
            create: base_url + 'Assetsublocation/create',
            read: base_url + 'Assetsublocation/read',
            update: base_url + 'Assetsublocation/update'
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