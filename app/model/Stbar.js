Ext.define('Xttest.model.Stbar',{
	extend: 'Ext.data.Model',
	fields : ['stbar_top', 'stbar_bottom_left','stbar_bottom_right','breadcrumb' ],
	proxy:
	{
		type: 'ajax',
		url:'data/status.json',
	    reader: {
		        type: 'json',
		        root: 'data',
		        successProperty: 'success',
		        totalProperty:'total'
		   		}
	}
});