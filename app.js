

Ext.application({
	name: 'Xttest',
    appFolder: 'app',

	launch: function(){
            Ext.create('Ext.panel.Panel', {
                    height: 300,
                    width: 1296,
                    renderTo: Ext.getBody(),
                    flex:1,
                    id:'mainpanel',
                    layout:{
                        type:'fit'
                    }
            });
        Ext.create('Xttest.store.Statuses');
       },
});