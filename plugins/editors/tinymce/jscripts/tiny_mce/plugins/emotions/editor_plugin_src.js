/* Import plugin specific language pack */
tinyMCE.importPluginLanguagePack('emotions', 'en,sv,zh_cn,cs,fa,fr_ca,fr,de,pl,pt_br,nl,da,he,nb,hu,ru,ru_KOI8-R,ru_UTF-8,nn,es,cy,is,zh_tw,zh_tw_utf8,sk');

function TinyMCE_emotions_getInfo() {
	return {
		longname : 'Emotions',
		author : 'Moxiecode Systems',
		authorurl : 'http://tinymce.moxiecode.com',
		infourl : 'http://tinymce.moxiecode.com/tinymce/docs/plugin_emotions.html',
		version : tinyMCE.majorVersion + "." + tinyMCE.minorVersion
	};
};

/**
 * Returns the HTML contents of the emotions control.
 */
function TinyMCE_emotions_getControlHTML(control_name) {
	switch (control_name) {
		case "emotions":
			var cmd = 'tinyMCE.execInstanceCommand(\'{$editor_id}\',\'mceEmotion\');return false;';
			return '<a href="javascript:' + cmd + '" onclick="' + cmd + '" target="_self" onmousedown="return false;"><img id="{$editor_id}_emotions" src="{$pluginurl}/images/emotions.gif" title="{$lang_emotions_desc}" width="20" height="20" class="mceButtonNormal" onmouseover="tinyMCE.switchClass(this,\'mceButtonOver\');" onmouseout="tinyMCE.restoreClass(this);" onmousedown="tinyMCE.restoreAndSwitchClass(this,\'mceButtonDown\');" /></a>';
	}

	return "";
}

/**
 * Executes the mceEmotion command.
 */
function TinyMCE_emotions_execCommand(editor_id, element, command, user_interface, value) {
	// Handle commands
	switch (command) {
		case "mceEmotion":
			var template = new Array();

			template['file'] = '../../plugins/emotions/emotions.htm'; // Relative to theme
			template['width'] = 160;
			template['height'] = 160;

			// Language specific width and height addons
			template['width'] += tinyMCE.getLang('lang_emotions_delta_width', 0);
			template['height'] += tinyMCE.getLang('lang_emotions_delta_height', 0);

			tinyMCE.openWindow(template, {editor_id : editor_id, inline : "yes"});

			return true;
	}

	// Pass to next handler in chain
	return false;
}
