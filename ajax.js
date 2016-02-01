/**
 * Ajax functions, used in Panel
 */


var AwesomeAjax = function(prefix){
    'use strict';

    var $ = jQuery; // enable jQuery
    var self = this;
    var prefix = prefix + '_';
    self.result = {};



    // Load model data from WP
    self.load_model = function(model_name, item_id, callback_success, callback_error){
        return self.ajax({
            action: prefix + 'get_' + model_name,
            data: {
                'id': item_id
            },
            success_handler: callback_success,
            error_handler: callback_error
        });
    };

    self.publish_model = function (id, callback_success, callback_error) {
        return self.ajax({
            action: prefix + 'publish_model',
            data: {
                'id': id
            },
            success_handler: callback_success,
            error_handler: callback_error
        });
    }

    // delete model by ID and model name
    self.delete_model = function(id, model_name){
        return self.ajax({
            action: prefix + 'delete_model',
            data: {
                'id': id,
                'model_name': model_name
            },
            success_handler: function (result) {
                return result;
            }
        });
    };

    // WP AJAX wrapper
    self.ajax = function (args) {
        return $.ajax({
            url: window[prefix + 'localize']['ajaxurl'],
            type: 'post',
            data: {
                action: args.action,
                security: window[prefix + 'localize']['ajax_nonce'],
                data: args.data || {}
            },
            success: function (data) {
                var responseArray = wpAjax.parseAjaxResponse(data);
                if(responseArray.errors){
                    var errors =  responseArray.responses[0].errors;
                    args.success_error_handler(errors)
                }else{
                    var result = responseArray.responses[0].data;
                    args.success_handler(result);
                }
            },
            error: function (data) {
                args.error_handler(data);
            }
        });
    }
};