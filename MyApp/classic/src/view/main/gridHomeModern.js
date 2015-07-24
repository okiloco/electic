
Ext.define("MyApp.view.login.gridHomeModern",{
    extend: "Ext.grid.Panel",
    alias:'widget.gridhomemodern',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Grid Home MODERN',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
