Ext.define('Xttest.store.Statuses',{
	extend: 'Ext.data.Store',
	model: 'Xttest.model.Stbar',
	autoLoad: true,
proxy
	:{
		type: 'ajax',
	api: {
	        read: 'data/status.json',
	        update: 'data/updateUsers.json'
	    },
	    reader: {
	        type: 'json',
	        root: 'root',
	        successProperty: 'success'
	    }
	}
});