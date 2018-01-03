  Ext.define('TDK.store.STtassetdata', {
    extend  : 'Ext.data.Store',
    model   : 'TDK.model.MODtassetdata',
    alias : 'store.STtassetdata',
    autoLoad : true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        actionMethods: {create: 'POST',read: 'POST',update: 'POST',destroy: 'POST'},
        api: {
            create: base_url + 'Tassetdata/create',
            read: base_url + 'Tassetdata/read',
            update: base_url + 'Tassetdata/update'
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

