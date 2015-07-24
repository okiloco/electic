/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.gridHome', {
    extend: 'Ext.grid.Grid',
    xtype: 'gridhome',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Grid Home Modern',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name', width: 100 },
        { text: 'Email', dataIndex: 'email', width: 230 },
        { text: 'Phone', dataIndex: 'phone', width: 150 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
