var init = () => {
  var model = new Model();
  var controler = new Controller(model);
  var view = new View(model);
}

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
  }

  // update this.json
  // get a new csv version of the string
  // update this.csv
  input(json) {

  }

  setJson(json) {
    
  }

  getCsv(json) {

  }

  setCsv(json) {

  }
}




// *****************************************************************************
// VIEW
// *****************************************************************************
class View {
  constructor(model) {
    this.model = model;
    // variable to hold json container div
    // variable to hold csv container div
  }

  render() {
    
  }
}
