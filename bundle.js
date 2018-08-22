(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const ExportControl = require('@tilecloud/mbgl-export-control')

const map = new mapboxgl.Map({
  container: 'map', style: 'style.json', zoom: 15, center: [130.702071, 32.805147],
  localIdeographFontFamily: "'MS Gothic', 'Hiragino Kaku Gothic Pro', sans-serif",
  attributionControl: true, hash: true
});
map.on('load', function() {
  map.addControl(new mapboxgl.NavigationControl());
  map.addControl(new ExportControl({
    dpi: 300,
    attribution: 'GSI'
  }))
})

},{"@tilecloud/mbgl-export-control":2}],2:[function(require,module,exports){
require("canvas-toBlob");var e,t=(e=require("file-saver"))&&"object"==typeof e&&"default"in e?e.default:e,n={loading:'\n  <svg style="width: 100%; height: 100%;" width="45" height="45" viewBox="0 0 45 45" stroke="#fff">\n    <g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2">\n      <circle cx="22" cy="22" r="6" stroke-opacity="0">\n        <animate attributeName="r"\n              begin="1.5s" dur="3s"\n              values="6;22"\n              calcMode="linear"\n              repeatCount="indefinite" />\n        <animate attributeName="stroke-opacity"\n              begin="1.5s" dur="3s"\n              values="1;0" calcMode="linear"\n              repeatCount="indefinite" />\n        <animate attributeName="stroke-width"\n              begin="1.5s" dur="3s"\n              values="2;0" calcMode="linear"\n              repeatCount="indefinite" />\n      </circle>\n      <circle cx="22" cy="22" r="6" stroke-opacity="0">\n        <animate attributeName="r"\n              begin="3s" dur="3s"\n              values="6;22"\n              calcMode="linear"\n              repeatCount="indefinite" />\n        <animate attributeName="stroke-opacity"\n              begin="3s" dur="3s"\n              values="1;0" calcMode="linear"\n              repeatCount="indefinite" />\n        <animate attributeName="stroke-width"\n              begin="3s" dur="3s"\n              values="2;0" calcMode="linear"\n              repeatCount="indefinite" />\n      </circle>\n      <circle cx="22" cy="22" r="8">\n        <animate attributeName="r"\n              begin="0s" dur="1.5s"\n              values="6;1;2;3;4;5;6"\n              calcMode="linear"\n              repeatCount="indefinite" />\n      </circle>\n    </g>\n  </svg>\n  ',download:'\n  <svg height="19px" viewBox="0 0 14 19" width="14px" xmlns="http://www.w3.org/2000/svg">\n    <title/><desc/><defs/>\n    <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">\n      <g fill="#000000" id="Core" transform="translate(-383.000000, -213.000000)">\n        <g id="file-download" transform="translate(383.000000, 213.500000)">\n          <path d="M14,6 L10,6 L10,0 L4,0 L4,6 L0,6 L7,13 L14,6 L14,6 Z M0,15 L0,17 L14,17 L14,15 L0,15 L0,15 Z" id="Shape"/>\n        </g>\n      </g>\n    </g>\n  </svg>\n  '},o=function(e){void 0===e&&(e={}),this.options=Object.assign({dpi:300,attribution:"© OpenStreetMap Contributors",textFont:[]},e)};o.prototype.onAdd=function(e){var o=this;this.container=document.createElement("div"),this.container.className="mapboxgl-ctrl mapboxgl-ctrl-group";var i=document.createElement("button");return i.className="mapboxgl-ctrl-icon mapbox-gl-download",i.type="button",i.setAttribute("aria-label","Download"),i.innerHTML=n.download,this.container.appendChild(i),i.addEventListener("click",function(){var n=window.devicePixelRatio;Object.defineProperty(window,"devicePixelRatio",{get:function(){return o.options.dpi/96}});var i=o.loading(),a=document.createElement("div");document.body.appendChild(a);var r=e.getContainer().offsetWidth,l=e.getContainer().offsetHeight,d=e.unproject([r,l]).toArray();o.setStyles(a,{visibility:"hidden",position:"absolute",top:0,bottom:0,width:r+"px",height:l+"px"});var s=[];e.style.glyphManager&&e.style.glyphManager.localIdeographFontFamily&&(s=e.style.glyphManager.localIdeographFontFamily);var c=new mapboxgl.Map({container:a,center:e.getCenter(),zoom:e.getZoom(),bearing:e.getBearing(),pitch:e.getPitch(),style:e.getStyle(),localIdeographFontFamily:s,hash:!1,preserveDrawingBuffer:!0,interactive:!1,attributionControl:!1});c.once("load",function(){c.addSource("attribution-for-image",{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:d},properties:{text:o.options.attribution}}]}});var r=[];if(o.options.textFont.length)r=o.options.textFont;else for(var l=e.getStyle().layers,s=0;s<l.length;s++)try{var p=e.getLayoutProperty(l[s].id,"text-font");if(p&&p.length){r=p;break}}catch(e){}c.addLayer({id:"markers",type:"symbol",source:"attribution-for-image",paint:{"text-color":"#000000","text-halo-color":"rgba(255, 255, 255, 1)","text-halo-width":2},layout:{"text-field":"{text}","text-font":r,"text-size":18,"text-anchor":"bottom-right","text-max-width":28,"text-offset":[-.5,-.5],"text-allow-overlap":!0}}),setTimeout(function(){c.getCanvas().toBlob(function(e){t.saveAs(e,c.getCenter().toArray().join("-")+".png"),c.remove(),a.parentNode.removeChild(a),i.parentNode.removeChild(i),Object.defineProperty(window,"devicePixelRatio",{get:function(){return n}})})},3e3)})}),this.container},o.prototype.onRemove=function(){this.container.parentNode.removeChild(this.container)},o.prototype.loading=function(){var e=document.createElement("div");document.body.appendChild(e),this.setStyles(e,{position:"absolute",top:0,bottom:0,width:"100%",backgroundColor:"rgba(0, 0, 0, 0.6)",zIndex:9999});var t=document.createElement("div");return t.innerHTML=n.loading,this.setStyles(t,{position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:9999,margin:"auto",width:"120px",height:"120px"}),e.appendChild(t),e},o.prototype.setStyles=function(e,t){for(var n in t)e.style[n]=t[n]},module.exports=o;


},{"canvas-toBlob":3,"file-saver":4}],3:[function(require,module,exports){
/* canvas-toBlob.js
 * A canvas.toBlob() implementation.
 * 2016-05-26
 * 
 * By Eli Grey, http://eligrey.com and Devin Samarin, https://github.com/eboyjr
 * License: MIT
 *   See https://github.com/eligrey/canvas-toBlob.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,
  plusplus: true */

/*! @source http://purl.eligrey.com/github/canvas-toBlob.js/blob/master/canvas-toBlob.js */

(function(view) {
"use strict";
var
	  Uint8Array = view.Uint8Array
	, HTMLCanvasElement = view.HTMLCanvasElement
	, canvas_proto = HTMLCanvasElement && HTMLCanvasElement.prototype
	, is_base64_regex = /\s*;\s*base64\s*(?:;|$)/i
	, to_data_url = "toDataURL"
	, base64_ranks
	, decode_base64 = function(base64) {
		var
			  len = base64.length
			, buffer = new Uint8Array(len / 4 * 3 | 0)
			, i = 0
			, outptr = 0
			, last = [0, 0]
			, state = 0
			, save = 0
			, rank
			, code
			, undef
		;
		while (len--) {
			code = base64.charCodeAt(i++);
			rank = base64_ranks[code-43];
			if (rank !== 255 && rank !== undef) {
				last[1] = last[0];
				last[0] = code;
				save = (save << 6) | rank;
				state++;
				if (state === 4) {
					buffer[outptr++] = save >>> 16;
					if (last[1] !== 61 /* padding character */) {
						buffer[outptr++] = save >>> 8;
					}
					if (last[0] !== 61 /* padding character */) {
						buffer[outptr++] = save;
					}
					state = 0;
				}
			}
		}
		// 2/3 chance there's going to be some null bytes at the end, but that
		// doesn't really matter with most image formats.
		// If it somehow matters for you, truncate the buffer up outptr.
		return buffer;
	}
;
if (Uint8Array) {
	base64_ranks = new Uint8Array([
		  62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1
		, -1, -1,  0, -1, -1, -1,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9
		, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
		, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35
		, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
	]);
}
if (HTMLCanvasElement && (!canvas_proto.toBlob || !canvas_proto.toBlobHD)) {
	if (!canvas_proto.toBlob)
	canvas_proto.toBlob = function(callback, type /*, ...args*/) {
		  if (!type) {
			type = "image/png";
		} if (this.mozGetAsFile) {
			callback(this.mozGetAsFile("canvas", type));
			return;
		} if (this.msToBlob && /^\s*image\/png\s*(?:$|;)/i.test(type)) {
			callback(this.msToBlob());
			return;
		}

		var
			  args = Array.prototype.slice.call(arguments, 1)
			, dataURI = this[to_data_url].apply(this, args)
			, header_end = dataURI.indexOf(",")
			, data = dataURI.substring(header_end + 1)
			, is_base64 = is_base64_regex.test(dataURI.substring(0, header_end))
			, blob
		;
		if (Blob.fake) {
			// no reason to decode a data: URI that's just going to become a data URI again
			blob = new Blob
			if (is_base64) {
				blob.encoding = "base64";
			} else {
				blob.encoding = "URI";
			}
			blob.data = data;
			blob.size = data.length;
		} else if (Uint8Array) {
			if (is_base64) {
				blob = new Blob([decode_base64(data)], {type: type});
			} else {
				blob = new Blob([decodeURIComponent(data)], {type: type});
			}
		}
		callback(blob);
	};

	if (!canvas_proto.toBlobHD && canvas_proto.toDataURLHD) {
		canvas_proto.toBlobHD = function() {
			to_data_url = "toDataURLHD";
			var blob = this.toBlob();
			to_data_url = "toDataURL";
			return blob;
		}
	} else {
		canvas_proto.toBlobHD = canvas_proto.toBlob;
	}
}
}(typeof self !== "undefined" && self || typeof window !== "undefined" && window || this.content || this));

},{}],4:[function(require,module,exports){
/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
		, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
		, arbitrary_revoke_timeout = 1000 * 40 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			setTimeout(revoker, arbitrary_revoke_timeout);
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, force = type === force_saveable_type
				, object_url
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
							var popup = view.open(url, '_blank');
							if(!popup) view.location.href = url;
							url=undefined; // release reference before dispatching
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (!object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (force) {
						view.location.href = object_url;
					} else {
						var opened = view.open(object_url, "_blank");
						if (!opened) {
							// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
							view.location.href = object_url;
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
			;
			filesaver.readyState = filesaver.INIT;

			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setTimeout(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}

			fs_error();
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function(){};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
  module.exports.saveAs = saveAs;
} else if ((typeof define !== "undefined" && define !== null) && (define.amd !== null)) {
  define("FileSaver.js", function() {
    return saveAs;
  });
}

},{}]},{},[1]);
