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
   "bucket": "my-cool-bucket",
   "endpoint": "my-cool-cdn-endpoint",
   "keyId": "my-cool-key",
   "keySecret": "my-cool-key"
  },

  "documents": {
    "about": "./about.md"
  }

}
