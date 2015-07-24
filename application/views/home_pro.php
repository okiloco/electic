<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>.:: Electic - Pro</title>
	<link rel="stylesheet" href="">
	<script type="text/javascript">
	    var Ext = Ext || {}; // Ext namespace won't be defined yet...

	    // This function is called by the Microloader after it has performed basic
	    // device detection. The results are provided in the "tags" object. You can
	    // use these tags here or even add custom tags. These can be used by platform
	    // filters in your manifest or by platformConfig expressions in your app.
	    //
	    Ext.beforeLoad = function (tags) {
	        var s = location.search,  // the query string (ex "?foo=1&bar")
	            profile;

	        // For testing look for "?classic" or "?modern" in the URL to override
	        // device detection default.
	        //
	        if (s.match(/\bclassic\b/)) {
	            profile = 'classic';
	        }
	        else if (s.match(/\bmodern\b/)) {
	            profile = 'modern';
	        }
	        else {
	            profile = tags.desktop ? 'classic' : 'modern';
	            //profile = tags.phone ? 'modern' : 'classic';
	        }

	        Ext.manifest = profile; // this name must match a build profile name

	        // This function is called once the manifest is available but before
	        // any data is pulled from it.
	        //
	        //return function (manifest) {
	            // peek at / modify the manifest object
	        //};
	    };
	</script>
	<script type="text/javascript">baseUrl='<?=base_url();?>';</script>
	<script src="MyApp/bootstrap.js" type="text/javascript" charset="utf-8" async defer></script>
	<script src="MyApp/build/production/MyApp/classic/app.js" type="text/javascript" charset="utf-8" async defer></script>
</head>
<body>
	
</body>
</html>