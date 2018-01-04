  Ext.define('TDK.store.STstobylocation', {
    extend  : 'Ext.data.Store',
    model   : 'TDK.model.MODstobylocation',
    alias : 'store.STstobylocation',
    reference: 'STstobylocation',
    autoLoad : true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        actionMethods: {read: 'POST'},
        api: {
            read: base_url + 'Stobylocation/read'
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