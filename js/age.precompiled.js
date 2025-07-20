(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['age.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1 class=\"age-label\">AGE</h1>\n<h2 class=\"count\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":26}}}) : helper)))
    + "<sup>."
    + alias4(((helper = (helper = lookupProperty(helpers,"milliseconds") || (depth0 != null ? lookupProperty(depth0,"milliseconds") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"milliseconds","hash":{},"data":data,"loc":{"start":{"line":2,"column":32},"end":{"line":2,"column":48}}}) : helper)))
    + "</sup></h2>";
},"useData":true});
})();