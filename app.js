

Ext.application({
	name: 'Xttest',
    appFolder: 'app',

	launch: function(){
        datastore = Ext.create('Xttest.store.Statuses');
       },
});