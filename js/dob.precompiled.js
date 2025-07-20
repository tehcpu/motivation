(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['dob.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form>\n  <h1 id=\"dob\" class=\"age-label\">When were you born?</h1>\n\n  <footer>\n    <input type=\"date\" name=\"dob\" id=\"dob\">\n    <button type=\"submit\">Motivate</button>\n  </footer>\n</form>";
},"useData":true});
})();