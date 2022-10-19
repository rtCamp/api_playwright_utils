const {
    faker
} = require('@faker-js/faker');

module.exports = {
    set_new_booking() {
        let track = [{
            "name": "morpheus",
            "job": "leader"
        }]
        return track;
    },
    update_request() {
        let track = [{
            "name": "morpheus",
            "job": "leader"
        }]
        return track;
    },
    patch_request() {
        let track = [{
            "name": "morpheus",
            "job": "leader"
        }]
        return track;
    },

    negative_post() {
        let track = [{
            "email": "morpheus@gmail.com",
            
        }]
        return track;
    },
    negative_put() {
        let track = [{
            "Nan": "morpheus@gmail.com",

        }]
        return track;
    },
   
}
