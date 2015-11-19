/**
 * System functions
 */
var AwesomeUtil = {
    // detect OS
    detect_os: function () {
        var os_name = "Unknown OS";
        if (navigator.appVersion.indexOf("Win") != -1) os_name = "Windows";
        if (navigator.appVersion.indexOf("Mac") != -1) os_name = "MacOS";
        if (navigator.appVersion.indexOf("X11") != -1) os_name = "UNIX";
        if (navigator.appVersion.indexOf("Linux") != -1) os_name = "Linux";
        return os_name;
    },

    // convert array to object
    toObject: function (arr) {
        var rv = {};
        for (var i = 0; i < arr.length; ++i) {
            if (typeof arr[i] === 'object') {
                rv[i] = AwesomeUtil.toObject(arr[i]);
            } else {
                rv[i] = arr[i];
            }
        }
        return rv;
    },

    // helper function to find some value in array of objects
    find_in_array_of_objects: function (array, key, value){
        var result = false;
        jQuery.each(array, function(index, item){
            if(item.hasOwnProperty(key) && item[key] == value){
                result = true;
            }
        });
        return result;
    },

    // convert HEX color to RGB color
    hex_to_rgb: function (hex){
        hex = parseInt(hex, 16);
        var r = hex >> 16;
        var g = hex >> 8 & 0xFF;
        var b = hex & 0xFF;
        return [r,g,b];
    },

    // calculate size properly
    calc_size: function (raw){
        raw = ''+raw;
        if(raw.endsWith('%') || raw.endsWith('px')){
            return raw;
        }
        var result = raw.replace('/[^0-9]/', '');
        return result + 'px';
    },

    // clean number from non-digit characters
    clean_number: function (raw) {
        return parseInt(raw.replace(/\D+/g, ''));
    },

    get_keys: function (obj){
        var result = {};
        var i = 0;
        _.each(obj, function (value, key, list) {
            if(typeof value === 'object'){
                result[i] = AwesomeUtil.get_keys(value);
            }else{
                result[i] = key;
            }
            i++;
        });
        return result;
    },

    find_key_by_value: function (needle, haystack) {
        var result;
        _.find(haystack, function(value, key){
            if(typeof value === 'object'){
                result = AwesomeUtil.find_key_by_value(needle, value);
            }else{
                if (value === needle) {
                    result = key;
                    return true;
                }else{
                    return false;
                }
            }
        });
        return result;
    },

    find_index_by_value: function (needle, haystack) {
        var keys = AwesomeUtil.get_keys(haystack);
        var key = AwesomeUtil.find_key_by_value(needle, haystack);
        var result = AwesomeUtil.find_key_by_value(key, keys);

        return result;
    },

    removeClass: function (el, start_with) {
        jQuery(el).removeClass (function (index, css) {
            var regex = new RegExp('(^|\\s)' + start_with + '\\S+', 'g');
            return (css.match (regex) || []).join(' ');
        });
    }
};

// smart replace for templates
String.prototype.replace_all = function(find, replace){
    return this.replace(new RegExp(find, 'g'), replace);
};

// capitalize
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

// check string ends with special characters
String.prototype.endsWith = function(end){
    return this.indexOf(end, this.length - end.length) !== -1;
};

var $ = jQuery;
// check if element visible on screen
$.fn.isVisible = function (parent) {
    var $parent = parent !== 'undefined' ? $(parent) : $(window);
    var windowScrollTopView = $parent.scrollTop();
    var elemTop = $(this).height();
    return (
        elemTop >= windowScrollTopView
    );
};