Ext.define('TDK.view.mainpage.mainlogin', {
    extend: 'Ext.form.Panel',
    alias:'widget.mainlogin',
    reference:'mainlogin',
    title: 'Login',
    frame:true,
    width: 320,
    heigt:320,
    bodyPadding: 10,

    defaultType: 'textfield',

    items: [{
        allowBlank: false,
        fieldLabel: 'User Login',
        name: 'userLogin',
        emptyText: 'user Login'
    }, {
        allowBlank: false,
        fieldLabel: 'Password',
        name: 'userPass',
        emptyText: 'password',
        inputType: 'password'
    }],

    buttons: [
        { text:'Login' ,pid:'btlogin' }
    ],

    defaults: {
        anchor: '100%',
        labelWidth: 120
    }

});