/* Copied from source of Syntax Highlighter 3.0.83
   by Alex Gorbatchev */
function hasClass(target, className)
{
	return target.className.indexOf(className) != -1;
};
function addClass(target, className)
{
	if (!hasClass(target, className))
		target.className += ' ' + className;
};
function removeClass(target, className)
{
	target.className = target.className.replace(className, '');
};
function getHighlighterId(id)
{
	var prefix = 'highlighter_';
	return id.indexOf(prefix) == 0 ? id : prefix + id;
};
function getHighlighterById(id)
{
	return sh.vars.highlighters[getHighlighterId(id)];
};
function getHighlighterDivById(id)
{
	return document.getElementById(getHighlighterId(id));
};
/* Customized by me */
SyntaxHighlighter.toolbar.items.list.push('collapseSource');
SyntaxHighlighter.toolbar.items.collapseSource = {
	getHtml: function(highlighter)
	{
		if (highlighter.getParam('collapse') != true)
			return '';
		return SyntaxHighlighter.toolbar.getButtonHtml(highlighter,
							       'collapseSource',
							       'Collapse');
	},
	execute: function(highlighter)
	{
		if (highlighter.getParam('collapse') != true)
			return;
		var div = getHighlighterDivById(highlighter.id);
		addClass(div, 'collapsed');
	}                
};
SyntaxHighlighter.toolbar.items.expandSource.getHtml = function(highlighter)
{
	if (highlighter.getParam('collapse') != true)
		return '';
	var title = highlighter.getParam('title');
	return SyntaxHighlighter.toolbar.getButtonHtml(highlighter,
						       'expandSource',
						       (title ? title : '')
						       + ' ('
							    + SyntaxHighlighter.config.strings.expandSource
							    + ')');
						       };
						       SyntaxHighlighter.config.strings.expandSource = 'Expand';
						       SyntaxHighlighter.config.strings.aboutDialog = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>About SyntaxHighlighter</title></head><body style="font-family:Geneva,Arial,Helvetica,sans-serif;background-color:#fff;color:#000;font-size:1em;text-align:center;"><div style="text-align:center;margin-top:1.5em;"><div style="font-size:xx-large;">SyntaxHighlighter</div><div style="font-size:.75em;margin-bottom:0.0em;"><div>version 3.0.83 (July 02 2010)</div><div><a href="http://alexgorbatchev.com/SyntaxHighlighter" target="_blank" style="color:#005896">http://alexgorbatchev.com/SyntaxHighlighter</a></div><div>JavaScript code syntax highlighter.</div><div>Copyright 2004-2010 Alex Gorbatchev.</div><hr/><div>Syntax Highlighter re-collapse addon</div><div>version 1.0 (April 12 2011)</div><div><a href="http://noexists.tistory.com/174" target="_blank" style="color:#005896">http://noexists.tistory.com/174</a></div><hr/></div><div>If you like this script, please <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2930402" style="color:#005896">donate</a> to <br/>keep development active!</div></div></body></html>';
						       SyntaxHighlighter.defaults['smart-tabs'] = false;
						       SyntaxHighlighter.defaults['tab-size'] = 8;
						       SyntaxHighlighter.all();
