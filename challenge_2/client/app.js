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

    this.$submitButton.on('click', this._submitHandler.bind(this));
    this.$form.on('submit', event => event.preventDefault());
  }
  _submitHandler() {
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

  input(json) {
    this._setJson(json);
    this._getCsv(json)
    .then(this._setCsv.bind(this))
    .catch(function(error) {
      console.log(error);
    });
  }

  _setJson(json) {
    this.json = json;
    this._trigger('setJson');
  }

  _isJson(json) {
    try {
      JSON.parse(json);
      return true;
    }
    catch(error) {
      return false;
    }
  }

  _getCsv(json) {
    let isJson = this._isJson(json);
    return new Promise((resolve, reject) => {
      if (isJson) {
        $.ajax({
          type: 'POST',
          url: 'http://localhost:8000',
          data: json,
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

  _setCsv(csv) {
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

    this.model.on('setCsv', this.render.bind(this));
    this.model.on('setJson', this.render.bind(this));
  }

  render() {
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
