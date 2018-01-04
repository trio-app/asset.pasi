  Ext.define('TDK.store.STstobycategory', {
    extend  : 'Ext.data.Store',
    model   : 'TDK.model.MODstobycategory',
    alias : 'store.STstobycategory',
    reference: 'STstobycategory',
    autoLoad : true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        actionMethods: {read: 'POST'},
        api: {
            read: base_url + 'Stobycategory/read'
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