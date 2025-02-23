var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
var MySDK = class {
  constructor(baseURL, apiKey) {
    this.baseURL = baseURL;
    this.apiKey = apiKey;
  }
  getData(endpoint) {
    return __async(this, null, function* () {
      const response = yield fetch(`${this.baseURL}/${endpoint}`, {
        headers: {
          "Authorization": this.apiKey ? `Bearer ${this.apiKey}` : "",
          "Content-Type": "application/json"
        }
      });
      return response.json();
    });
  }
};
export {
  MySDK
};
