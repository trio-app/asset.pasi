  Ext.define('TDK.store.STstosummary', {
    extend  : 'Ext.data.Store',
    model   : 'TDK.model.MODstosummary',
    alias : 'store.STstosummary',
    reference: 'STstosummary',
    autoLoad : true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        actionMethods: {read: 'POST'},
        api: {
            read: base_url + 'Stosummary/read'
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