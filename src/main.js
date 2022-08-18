import Vue from 'vue';
import say from './util';
say();
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});