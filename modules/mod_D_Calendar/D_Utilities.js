/**
Copyright 2010 - Kastaniotis Dimitris - D-Extensions.com
license GNU/GPL http://www.gnu.org/copyleft/gpl.html


This file is part of D Calendar.

D Calendar is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

D Calendar is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with D Calendar.  If not, see <http://www.gnu.org/licenses/>.

**/

function D_bug() {

    this.debugElement = "debug";
    this.lineBreak = "<BR />";
    this.enabled = "true";
    this.print = function (txt) {
        if (this.enabled == "true") {
            document.getElementById(this.debugElement).innerHTML += txt + this.lineBreak;
        }
    }
}

function loadTooltips() {
    var JTooltips = new Tips($$('.hasTip'), { maxTitleChars: 50, fixed: false });
}

function getBaseURL() {
    var url = location.href;  // entire url including querystring - also: window.location.href;
    var baseURL = url.substring(0, url.lastIndexOf('/'));
        return baseURL;
}

function D_Print(text) {
	try
	{
		document.getElementById(d_calendar.div).innerHTML = text;
	}
	catch(err)
	{
		document.getElementById("calendar").innerHTML = text;
	}
	
}