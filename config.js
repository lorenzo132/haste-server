{

  "host": "0.0.0.0",
  "port": 6969,

  "keyLength": 10,

  "maxLength": 400000000000,

  "staticMaxAge": 8640000000000000,

  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "phonetic"
  },

  "rateLimits": {
    "categories": {
      "normal": {
        "totalRequests": 200,
        "every": 360000
      }
    }
  },


  "storage": { 
   "type": "amazon-s3",
   "bucket": "hastebin-cc",
   "endpoint": "s3.eu-central-003.backblazeb2.com",
   "keyId": "003724e48bbec54000000000a",
   "keySecret": "K003EuyJK5gMqr0t/sNUZ7wDjQ8bORU"
  },

  "documents": {
    "about": "./about.md"
  }

}
