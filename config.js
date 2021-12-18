{

  "host": "0.0.0.0",
  "port": 6969,

  "keyLength": 10,

  "maxLength": 4000000000000,

  "staticMaxAge": 864000000000000000,

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
        "totalRequests": 25,
        "every": 3600000
      }
    }
  },


  "storage": { 
   "type": "amazon-s3",
   "bucket": "my-cool-bucket",
   "endpoint": "my-amazing-cdn-endpoint",
   "keyId": "my-key-here",
   "keySecret": "my-secret-here"
  },

  "documents": {
    "about": "./about.md"
  }

}
