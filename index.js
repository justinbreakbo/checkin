const fetch = require('node-fetch')

// paste your code
fetch("https://glados.rocks/api/user/checkin", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "2955106794105734180656862944519-1080-1920",
    "cache-control": "no-cache",
    "content-type": "application/json;charset=UTF-8",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "_ga=GA1.2.1237147788.1653529577; __stripe_mid=9e999e41-8f65-4ab3-9217-29b97220b280a91d08; koa:sess=eyJ1c2VySWQiOjE2MzUyMiwiX2V4cGlyZSI6MTY5MzIwNTMyODU2NSwiX21heEFnZSI6MjU5MjAwMDAwMDB9; koa:sess.sig=YZVBl460FsVot_ZN-sETjcdTVqI; _gid=GA1.2.522199147.1669946799"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"token\":\"glados.network\"}",
  "method": "POST"
});