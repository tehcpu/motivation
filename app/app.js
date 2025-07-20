(function(){

var $  = document.getElementById.bind(document);
var $$ = document.querySelectorAll.bind(document);

var App = function($el){
  this.$el = $el;
  this.load();

  this.$el.addEventListener(
    'submit', this.submit.bind(this)
  );

  // Лог для отладки
  console.log('Handlebars loaded:', typeof Handlebars === 'object');
  console.log('Templates available:', Handlebars.templates);

  if (this.dob) {
    this.renderAgeLoop();
  } else {
    this.renderChoose();
  }
};

App.fn = App.prototype;

App.fn.load = function(){
  var value;

  if (value = localStorage.dob)
    this.dob = new Date(parseInt(value));
};

App.fn.save = function(){
  if (this.dob)
    localStorage.dob = this.dob.getTime();
};

App.fn.submit = function(e){
  e.preventDefault();

  var input = this.$$('input')[0];
  if ( !input.valueAsDate ) return;

  this.dob = input.valueAsDate;
  this.save();
  this.renderAgeLoop();
};

App.fn.renderChoose = function(){
  var template = this.view('dob');
  if (typeof template !== 'function') {
    console.error('Error: dob template not loaded or not a function');
    this.$el.innerHTML = '<p>Error loading template. Check console.</p>'; // Fallback
    return;
  }
  this.html(template());
};

App.fn.renderAgeLoop = function(){
  this.interval = setInterval(this.renderAge.bind(this), 100);
};

App.fn.renderAge = function(){
  var now       = new Date
  var duration  = now - this.dob;
  var years     = duration / 31556900000;

  var majorMinor = years.toFixed(9).toString().split('.');

  requestAnimationFrame(function(){
    var template = this.view('age');
    if (typeof template !== 'function') {
      console.error('Error: age template not loaded or not a function');
      return;
    }
    this.html(template({
      year:         majorMinor[0],
      milliseconds: majorMinor[1]
    }));
  }.bind(this));
};

App.fn.$$ = function(sel){
  return this.$el.querySelectorAll(sel);
};

App.fn.html = function(html){
  this.$el.innerHTML = html;
};

App.fn.view = function(name){
  var tmpl = Handlebars.templates[name + '.hbs'];  // Добавили '.hbs' для совпадения с вашими ключами
  console.log(`Fetching template ${name}:`, tmpl);
  return tmpl;
};

window.app = new App($('app'))

})();