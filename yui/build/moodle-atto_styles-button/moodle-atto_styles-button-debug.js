YUI.add('moodle-atto_styles-button', function (Y, NAME) {

// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/*
 * @package    atto_styles
 * @copyright  2015 Daniel Thies <dthies@ccal.edu>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * @module moodle-atto_styles-button
 */

/**
 * Atto text editor styles plugin.
 *
 * @namespace M.atto_styles
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */

var BUTTON = 'styles',
    STATE = false;

Y.namespace('M.atto_styles').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
    initializer: function() {
        var button = this.addButton({
            icon: 'e/styleprops',
            callback: this._toggle
        });
        button.set('title', M.util.get_string('pluginname', 'atto_styles'));
    },

    /**
     * Toggle visibility of style markers
     *
     * @method _toggle
     * @param {EventFacade} e
     * @private
     */
    _toggle: function(e) {
        e.preventDefault();
        var button = this.buttons[BUTTON];

        if (button.getData(STATE)) {
            this.unHighlightButtons(BUTTON);
            this._setViewStyle(button);
        } else {
            this.highlightButtons(BUTTON);
            this._setViewStyle(button, true);
        }

    },

    /**
     * Change the mode for style visibility
     *
     * @method _setViewStyle
     * @param {Node} button The view style button
     * @param {Boolean} mode Whether the editor should display styling
     * @private
     */
    _setViewStyle: function(button, mode) {
        var host = this.get('host');

        if (mode) {
            this.editor.addClass('atto_styles');
        } else {
            this.editor.removeClass('atto_styles');
        }
        button.setData(STATE, !!mode);

    }
});


}, '@VERSION@', {"requires": ["moodle-editor_atto-plugin"]});
