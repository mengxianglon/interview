import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http = axios.create({
    baseURLL:'http://a.hnggjkw.com/api/interview'
})

export {http}