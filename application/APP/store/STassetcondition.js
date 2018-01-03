  Ext.define('TDK.store.STassetcondition', {
    extend  : 'Ext.data.Store',
    model   : 'TDK.model.MODassetcondition',
    alias : 'store.STassetcondition',
    autoLoad : true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        actionMethods: {create: 'POST',read: 'POST',update: 'POST',destroy: 'POST'},
        api: {
            create: base_url + 'Assetcondition/create',
            read: base_url + 'Assetcondition/read',
            update: base_url + 'Assetcondition/update'
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