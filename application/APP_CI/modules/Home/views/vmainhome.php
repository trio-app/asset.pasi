<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<link  href="<?php echo extjs_url(); ?>build/classic/theme-classic/resources/theme-classic-all.css" rel="stylesheet" />
		<script src="<?php echo extjs_url(); ?>build/ext-all.js"></script>
                <link  href="<?php echo extjs_url(); ?>fonts/font-awesome.min.css" rel="stylesheet" />
		<script src="<?php echo extjs_url(); ?>build/classic/theme-classic/theme-classic.js"></script>
		
                <!-- required label printing scripts -->
                <script type="text/javascript" src="<?php echo base_url().'system/inc/qz/rsvp-3.1.0.min.js'; ?>"></script>
                <script type="text/javascript" src="<?php echo base_url().'system/inc/qz/sha-256.min.js'; ?>"></script>
                <script type="text/javascript" src="<?php echo base_url().'system/inc/qz/qz-tray.js'; ?>"></script>
                <script type="text/javascript" src="<?php echo base_url().'system/inc/qz/qz-config.js'; ?>"></script>
                
                <!-- required exporter grid -->
                <script type="text/javascript" src="<?php echo base_url().'system/inc/filesaver/FileSaver.js'; ?>"></script>
                <script type="text/javascript" src="<?php echo base_url().'system/inc/jszip/dist/jszip.js'; ?>"></script>
                
	<script type="text/javascript">
		// base variable
		var base_url = '<?php echo base_url(); ?>';
		var extjs_url = '<?php echo extjs_url(); ?>';
	</script>   
	<script type="text/javascript">

    Ext.Loader.setConfig({ enabled: true });
    Ext.define('Varconfig', {
     singleton: true,
     UserLogin: '',
     LoginDate: '',
     Applicationtitle:'<b>Asset Management System</b> <br /> Version 1.0'
    });

    Ext.application({
        name: 'TDK',
        appFolder: 'application/app',
        autoCreateViewport: true,
        requires : [
            'Varconfig'],
        launch: function () {
            
        }
    });
	
	</script>
	</head>
        <body>
            
        </body>
</html>