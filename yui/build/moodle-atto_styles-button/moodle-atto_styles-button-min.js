YUI.add("moodle-atto_styles-button",function(e,t){var n="styles",r=!1;e.namespace("M.atto_styles").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){var e=this.addButton({icon:"e/styleprops",callback:this._toggle});e.set("title",M.util.get_string("pluginname","atto_styles"))},_toggle:function(e){e.preventDefault();var t=this.buttons[n];t.getData(r)?(this.unHighlightButtons(n),this._setViewStyle(t)):(this.highlightButtons(n),this._setViewStyle(t,!0))},_setViewStyle:function(e,t){var n=this.get("host");t?this.editor.addClass("atto_styles"):this.editor.removeClass("atto_styles"),e.setData(r,!!t)}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});
