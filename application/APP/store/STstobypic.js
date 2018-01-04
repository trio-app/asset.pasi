  Ext.define('TDK.store.STstobypic', {
    extend  : 'Ext.data.Store',
    model   : 'TDK.model.MODstobypic',
    alias : 'store.STstobypic',
    reference: 'STstobypic',
    autoLoad : true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        actionMethods: {read: 'POST'},
        api: {
            read: base_url + 'Stobypic/read'
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