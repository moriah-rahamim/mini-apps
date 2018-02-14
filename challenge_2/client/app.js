$(document).ready(() => {
  var model = new Model();
  var controler = new Controller(model);
  var view = new View(model);
});

// *****************************************************************************
// CONTROLLER
// *****************************************************************************
class Controller {

  constructor(model) {
    this.$form = $('form');
    this.$inputBox = $('.json-input');
    this.$submitButton = $('.submit');
    this.model = model;

    this.$submitButton.on('click', this.submitHandler.bind(this));
    this.$form.on('submit', event => event.preventDefault());
  }

  submitHandler() {
    let input = this.$inputBox.val();
    this.$inputBox.val('');
    this.model.input(input);
  }
}

// *****************************************************************************
// MODEL
// *****************************************************************************
class Model {

  constructor() {
    this.json = '';
    this.csv = '';
    this.triggers = {};
  }

  on(eventName, func, ...args) {
    if (!this.triggers[eventName]) {
      this.triggers[eventName] = [];
    }
    this.triggers[eventName].push(func.bind(null, ...args));
  }

  _trigger(eventName, ...args) {
    if (this.triggers[eventName]) {
      for (let func of this.triggers[eventName]) {
        func(...args);
      }
    }
  }

  // update this.json
  // get a new csv version of the string
  // update this.csv
  input(json) {
    this.setJson(json);
    this.getCsv(json)
    .then(this.setCsv.bind(this))
    .catch(function(error) {
      console.log(error);
    });
  }

  setJson(json) {
    this.json = json;
    this._trigger('setJson');
  }

  isJson(json) {
    try {
      JSON.parse(json);
      return true;
    }
    catch(error) {
      return false;
    }
  }

  getCsv(json) {
    let isJson = this.isJson(json);
    return new Promise((resolve, reject) => {
      if (isJson) {
        $.ajax({
          type: 'POST',
          url: 'http://localhost:8000',
          data: json,
          // dataType: 'text'
          // ,
          contentType: 'application/json'
        })
        .done(function(data) {
          resolve(data);
        })
        .fail(function(error) {
          reject(error);
        });
      } else {
        reject ('content not provided in json format');
      }
    });
  }

  setCsv(csv) {
    this.csv = csv;
    this._trigger('setCsv');
  }
}

// *****************************************************************************
// VIEW
// *****************************************************************************
class View {
  constructor(model) {
    this.model = model;
    this.$json = $('.json');
    this.$csv = $('.csv');
    // variable to hold json container div
    // variable to hold csv container div
    this.model.on('setCsv', this.render.bind(this));
    this.model.on('setJson', this.render.bind(this));
  }

  render() {
    let json = this.model.json;
    let csv = this.model.csv;
    this._appendCsv(this.$csv, csv);
  }

  _appendCsv($node, csv) {
    let rows = csv.split('\n');
    rows.forEach((lineOfText) => {
      $node.append(`${lineOfText}<br />`);
    });
  }
}
