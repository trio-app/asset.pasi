  Ext.define('TDK.store.STstobygroup', {
    extend  : 'Ext.data.Store',
    model   : 'TDK.model.MODstobygroup',
    alias : 'store.STstobygroup',
    reference: 'STstobygroup',
    autoLoad : true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        actionMethods: {read: 'POST'},
        api: {
            read: base_url + 'Stobygroup/read'
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