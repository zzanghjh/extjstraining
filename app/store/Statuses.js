Ext.define('Xttest.store.Statuses',{
	storeId: 'statuses',
	extend: 'Ext.data.Store',
	model: 'Xttest.model.Stbar',
	autoLoad: true,
      autoSync: true,
      listeners:{
            load:function(){
                  var panel = Ext.create('Ext.panel.Panel', {
                    height: 300,
                    width: 1296,
                    renderTo: Ext.getBody(),
                    flex:1,
                    layout:{
                        type:'fit'
                    }
                });
                  tpl_status_bar = Ext.XTemplate.from('tpl-status-bar');
                  tpl_breadcrumb = Ext.XTemplate.from('tpl-breadcrumb');
                  tpl_status_bar.overwrite(panel.body, datastore.getAt(0).data);
                  tpl_breadcrumb.insertBefore(panel.body, datastore.getAt(0).data);
                  
            }
      }
	// data: {
            //         stbar_top: [
            //             { name: 'Client Name', 'value':'HSBC, NA' },
            //             { name: 'UCN', value: '009617853-000' },
            //             { name: 'CRU', value: '6UKISH08' },
            //             { name: 'Next Review Date', value: '12-Apr-2014' },
            //             { name: 'Client ID', value: '0010448208' },
            //             { name: 'Ultimate Parent', value: 'HSBC, UK' }
            //         ],
            //         stbar_bottom_left:[
            //             {name: 'Overdraft Alert', value: 1},
            //             {name: 'Overdraft', value: 0},
            //             {name: 'Awaiting Approval', value: 2},
            //         ],
            //         stbar_bottom_right:[
            //             {name: 'Credit Limit (USD)', value: 50000000},
            //             {name: 'Obligor Rating', value: 2},
            //             {name: 'Primary Exposure', value: 3735593},
            //             {name: 'Total Utilization', value: '22.3%'},
            //             {name: 'Primary Used(USD)', value: 3735593},
            //             {name: 'Primary Unused (USD)', value: 44000000},
            //          ],
            //          breadcrumb:[
            //             {name:"PORTFOLIO", link:"#"},
            //             {name:"PARENT", link:"#"},
            //             {name:"FAMILY", link:"#"},
            //             {name:"CLIENT", link:"#"},
            //             {name:"FACILITY", link:"#"},
            //             {name:"PRODUCT ID", link:"#"},
            //             {name:"TRANSACTION", link:"#"}
            //         ]
            //      }
});