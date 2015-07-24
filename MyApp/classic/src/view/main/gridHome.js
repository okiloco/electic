/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.gridHome', {
    extend: 'Ext.grid.Panel',
    xtype: 'gridhome',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Grid Home',

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
