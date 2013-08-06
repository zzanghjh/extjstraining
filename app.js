var data = {
    stbar_top: [
        { name: 'Client Name', value:'HSBC, NA' },
        { name: 'UCN', value: '009617853-000' },
        { name: 'CRU', value: '6UKISH08' },
        { name: 'Next Review Date', value: '12-Apr-2014' },
        { name: 'Client ID', value: '0010448208' },
        { name: 'Ultimate Parent', value: 'HSBC, UK' }
    ],

    stbar_bottom_left:[
        {name: 'Overdraft Alert', value: 1},
        {name: 'Overdraft', value: 0},
        {name: 'Awaiting Approval', value: 2},
    ],
    stbar_bottom_right:[
        {name: 'Credit Limit (USD)', value: 50000000},
        {name: 'Obligor Rating', value: 2},
        {name: 'Primary Exposure', value: 3735593},
        {name: 'Total Utilization', value: '22.3%'},
        {name: 'Primary Used(USD)', value: 3735593},
        {name: 'Primary Unused (USD)', value: 44000000},
    ],
    breadcrumb:[
        {name:"PORTFOLIO", link:"#"},
        {name:"PARENT", link:"#"},
        {name:"FAMILY", link:"#"},
        {name:"CLIENT", link:"#"},
        {name:"FACILITY", link:"#"},
        {name:"PRODUCT ID", link:"#"},
        {name:"TRANSACTION", link:"#"}
    ]
};

Ext.application({
	name: 'xttest',
	launch: function(){
		var tpl_status_bar = Ext.XTemplate.from('tpl-status-bar');
        var tpl_breadcrumb = Ext.XTemplate.from('tpl-breadcrumb');
    	panel = new Ext.create('Ext.panel.Panel', {
        height: 300,
        items:[{
            xtype:'textfield'
        }],
        renderTo: Ext.getBody()
    });
	
    tpl_status_bar.overwrite(panel.body, data);
    tpl_breadcrumb.insertBefore(panel.body, data);
	}
});