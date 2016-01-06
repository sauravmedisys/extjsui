/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('extjsui.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'extjsui.view.main.MainController',
        'extjsui.view.main.MainModel',
		'Ext.layout.container.Center',
		'Ext.layout.container.HBox',
		'Ext.layout.container.Table'
    ],
    xtype: 'app-main',
    controller: 'main',
    viewModel: {
        type: 'center'
    },

    layout: {
        type: 'border'
    },
	
    items: [{
		// main container
		border		: false,
        layout		: 'center',
        autoScroll	: true,
        width		: '100%',
        height		: '100%',
        bodyPadding	: '20 0',
		bodyStyle	: "background:url(./../resources/logo.png) no-repeat !important",
		items		:[{
			//middle panel
                width		: '91%',
                height		: '50%',
				margin		: '10.5% 0 0 0',
                frame		: false,
                bodyPadding	: '10 20',
				position	: 'fixed',
				border		: '1px solid rgb(217, 220, 220)',
				bodyStyle	: 'background-color: rgba(250, 250, 250, .7)',
				layout		: {
					type	: 'hbox',
					pack	: 'start',
					align	: 'stretch'
				},
				items		:[{
					//inner left panel in middle panel
						flex	: 1,
						html		: '<center><h1> <font color="#c12d2d">HOSPITAL</font> <font color="#7a7a7a">INFORMATION SYSTEM<center><h1></center>',
						height	: '100%',
						border	: false,
						bodyStyle	: "background:url(resources/hosplogo.png) no-repeat scroll center center transparent !important"
					
				},{
					// inner right panel in middle panel
						html		: 'right panel',
						width		: '50%',
						height		: '100%',
						margin		: '0 0 0 0',
						bodyPadding	: '10 10',
						border		: false,
						//bodyStyle	:{"background-color":"#fbfbfb", "background": "transparent"	},
						bodyStyle	:{"background": "transparent"},
						layout		: {
							type	: 'hbox',
							pack	: 'start',
							align	: 'stretch'
						},
						items		:[{
							//Sign in box left panel
								flex	: 1,
								width	:'50%',
								height	: '100%',
								border		: false,
								bodyStyle	:{"background-color":"#ce1c23"}
						},{
							// number box right panel
								width		: '50%',
								bodyStyle	:{"background-color":"#ce1c23"}
								
						}]
				}]
		}]
	}]
    
});
