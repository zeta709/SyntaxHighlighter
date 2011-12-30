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
SyntaxHighlighter.defaults['smart-tabs'] = false;
SyntaxHighlighter.defaults['tab-size'] = 8;
SyntaxHighlighter.all();
