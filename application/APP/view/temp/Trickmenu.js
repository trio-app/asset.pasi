Ext.define('TDK.view.temp.Trickmenu', {
        extend: 'Ext.toolbar.Toolbar',
        xtype: 'docked-toolbars',
        alias:'widget.trickmenu',
        cls: 'docked-toolbars',
        width   : 400,
        items: [{
                xtype: 'button',
                pid:'bar',
                iconCls: 'fa fa-bars',
                tooltip:'the Form'
            },'-',{
                xtype: 'button',
                pid:'new',
                icon:extjs_url + 'examples/classic/writer/add.png',
                tooltip:'New Input Data'
            },'-',{
                xtype: 'button',
                pid:'edit',
                icon:extjs_url + 'examples/classic/writer/edit.png',
                tooltip:'edit Input Data'
            },'-',{
                xtype: 'button',
                pid:'save',
                icon:extjs_url + 'examples/classic/writer/save.gif',
                tooltip:'Save Process'
            },'-',{
                xtype: 'button',
                pid:'delete',
                icon:extjs_url + 'examples/classic/writer/delete.png',
                tooltip:'Delete Data'
                
            },'-',{
                xtype: 'button',
                pid:'gridtable',
                icon:extjs_url + 'examples/classic/writer/grid.png',
                tooltip:'Show Data Table'
                
            },'->',{
                xtype: 'button',
                text:'Reload Panel',
                pid:'refresh',
                icon:extjs_url + 'examples/classic/writer/refresh.gif',
                tooltip:'Refresh Page Show'
            },'-',
            ,' ',{
                xtype: 'button',
                text:'Export Data',
                pid:'export',
                icon:extjs_url + 'icon/excel.ico',
                tooltip:'Export Data.. Excel File'
                
            }
        ]
        
});