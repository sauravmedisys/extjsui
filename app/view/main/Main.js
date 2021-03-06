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
        'Ext.layout.container.Center',
		'Ext.layout.container.HBox',
		'Ext.layout.container.Table'
    ],
    xtype		: 'layout-center',
     layout		: 'center',
	
    items: [{
		// main container
		border		: false,
        layout		: 'center',
        autoScroll	: true,
        width		: '100%',
        height		: '100%',
        bodyPadding	: '20 0',
		bodyStyle	: 'background:url(resources/logo.png) no-repeat !important',
		items		:[{
			//middle panel
				
                width		: '91%',
                height		: '60%',
				margin		: '10.5 0 0 0',
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
						height	: '100%',
						border	: false,
						layout		: {
							type	: 'vbox',
							pack	: 'start',
							align	: 'stretch'
						},
						bodyStyle	: "background:transparent",
						items		:[{
							flex	: 1,
							html		: '<center><h1> <font color="#c12d2d">HOSPITAL</font> <font color="#7a7a7a">INFORMATION SYSTEM<center><h1></center>',
							height	: '50%',
							layout		: {
							type	: 'hbox',
							pack	: 'start',
							align	: 'stretch'
						},
						bodyStyle	: "background:transparent",
						items		:[{
							flex	: 1,
							height	: '50%',
							bodyStyle	: "background:url(resources/tips.png) no-repeat scroll center center transparent !important"
							
						},{
							flex	: 2,
							html	:'User Tips<br>* To Change Password Press "F9"<br>* Remember to logout before leaving your workstation<br>* if you don\'t Enter your ID & Password in less than 2 Min! your session will be logged out.',
							margin	: '40 0 0 0',
							height	: '50%',
							bodyStyle	: 'background: center transparent !important'
						}]
						},{
							flex	: 2,
							height	: '50%',
							
							layout		: {
							type	: 'hbox',
							pack	: 'start',
							align	: 'stretch'
						},
						items		:[{
							flex		: 1,
							height		: '50%',
							bodyStyle	: "background:url(resources/hosplogo.png) no-repeat center center scroll transparent !important"
						},{
							flex		: 2,
							html		: "Product License<br>This Product is Licensed to:<br>Ministry of Health<br>License Code: 1127-58",
							height		: '50%',
							bodyStyle	: 'background: center center scroll transparent !important'
							
						}]
						}]
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
								width	:'30%',
								height	: '100%',
								border		: false,
								bodyStyle	:{"background-color":"#ce1c23"},
								layout: {
									type: 'vbox',
									pack: 'start',
									align: 'stretch'
								},
								items		:[{
									//Upper sequrity pic
									flex		: 1,
//									bodyStyle	:{"background-color":"#ce1c23"},
									bodyStyle	:{"background-color":"#c12d2d"},
									margin		: '0 0 0 0',
									height		: '80%',
									bodyStyle	: "background:url(resources/security.png) no-repeat scroll center center transparent !important"
									
								},{
									//lower username field
									margin		: '0 0 20 40',
									bodyStyle	:{"background-color":"#ce1c23"},
									items		:[{
										xtype	: 'textfield',
										name	: 'username'
										
									},{
										xtype	: 'textfield',
										name	: 'pass',
										inputType: 'password',
										layout		:{
											type	: 'vbox',
											pack	: 'start',
											align	: 'stretch'
										},
									}]
								}]
						},{
							// number box right panel
								width		: '60%',
								bodyStyle	:{"background-color":"#ce1c23"},
								layout		:{
									type	: 'vbox',
									pack	: 'start',
									align	: 'stretch'
								},
								items		:[{
									//Upper Number pad
									flex		: 1,
//									bodyStyle	:{"background-color":"#ce1c23"},
									bodyStyle	:{"background-color":"#c12d2d"},
									margin		: '0 0 0 0',
									height		: '80%',
									bodyPadding	: '15 20',
									bodyStyle	:{"background-color":"#ce1c23"},
									layout		: {
										type		: 'table',
										columns		: 4,
										tableAttrs	: {
											style	: {
												width: '100%'
											}
										}
									},
									items		:[{
									xtype	: 'button',
									width	: '100%',
									text	: '7',
									width	: '100%',
									scale	: 'large',
									bodyStyle	:'background-color:#dedede'
									
									
								},{
									xtype	: 'button',
									text	: '8',
									width	: '100%',
									scale	: 'large'
								},{
									xtype	: 'button',
									text	: '9',
									width	: '100%',
									scale	: 'large'
								},{
									xtype	: 'button',
									text	: 'AC',
									width	: '100%',
									scale	: 'large'
								},{
									xtype	: 'button',
									text	: '4',
									width	: '100%',
									scale	: 'large'
								},{
									xtype	: 'button',
									text	: '5',
									width	: '100%',
									scale	: 'large'
								},{
									xtype	: 'button',
									text	: '6',
									width	: '100%',
									scale	: 'large'
								},{
									xtype	: 'button',
									text	: 'bs',
									width	: '100%',
									scale	: 'large'
								},{
									xtype	: 'button',
									text	: '1',
									width	: '100%',
									scale	: 'large'
								},{
									xtype	: 'button',
									text	: '2',
									width	: '100%',
									scale	: 'large'
								},{
									xtype	: 'button',
									text	: '3',
									width	: '100%',
									scale	: 'large'
								},{
									xtype	: 'button',
									text	: 'Enter',
									width	: '100%',
									scale	: 'large'
								}]
									
								},{
									//lower image field
									margin		: '0 0 20 20',
									bodyStyle	:{"background-color":"#ce1c23"},
									layout		: {
										type	: 'hbox',
										pack	: 'start',
										align	: 'stretch'
									},
									items		:[{
										xtype	: 'button',
										text	: 'logout',
										width	: '40%',
										scale	: 'large',
										bodyStyle	: "background:url(resources/logout.png) no-repeat scroll center center transparent !important"
									
									},{
										xtype	: 'button',
										text	: 'login',
										width	: '40%',
										scale	: 'large',
										bodyStyle	: "background:url(resources/login.png) no-repeat scroll center center transparent !important"
									
									}]
								}]
						}]
				}]
		}]
	}]
    
});
