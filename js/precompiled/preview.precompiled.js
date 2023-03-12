(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['preview'] = template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class='output-block' data-type="
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"type") : stack1), depth0))
    + " id='"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"blockID") : stack1), depth0))
    + "'>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias4).call(alias3,((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"type") : stack1),"section",{"name":"eq","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":4,"column":10},"end":{"line":4,"column":35}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":4,"column":4},"end":{"line":6,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias4).call(alias3,((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"type") : stack1),"divider",{"name":"eq","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":7,"column":10},"end":{"line":7,"column":35}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":7,"column":4},"end":{"line":9,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias4).call(alias3,((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"type") : stack1),"header",{"name":"eq","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":10,"column":10},"end":{"line":10,"column":34}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":10,"column":4},"end":{"line":12,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias4).call(alias3,((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"type") : stack1),"image",{"name":"eq","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":33}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":13,"column":4},"end":{"line":18,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias4).call(alias3,((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"type") : stack1),"context",{"name":"eq","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":35}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":19,"column":4},"end":{"line":25,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias4).call(alias3,((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"type") : stack1),"actions",{"name":"eq","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":26,"column":10},"end":{"line":26,"column":35}}}),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":26,"column":4},"end":{"line":34,"column":11}}})) != null ? stack1 : "")
    + "    </div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <p class=\"output-text-block\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"text") : stack1)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</p>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "      <hr class='output-divider-block'/>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <strong class='output-header-block'>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"text") : stack1)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</strong>\n";
},"8":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"output-image-block\">\n        <p>"
    + alias2(alias1(((stack1 = ((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"title") : stack1)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</p>\n        <img src=\""
    + alias2(alias1(((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"image_url") : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"alt_text") : stack1), depth0))
    + "\">\n      </div>\n";
},"10":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"output-context-block\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"elements") : stack1),{"name":"each","hash":{},"fn":container.program(11, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":21,"column":8},"end":{"line":23,"column":17}}})) != null ? stack1 : "")
    + "      </div>\n";
},"11":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <p class='context'>"
    + container.escapeExpression(container.lambda(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</p>\n";
},"13":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"output-button-block\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"elements") : stack1),{"name":"each","hash":{},"fn":container.program(14, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":28,"column":8},"end":{"line":32,"column":17}}})) != null ? stack1 : "")
    + "      </div>\n";
},"14":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"type") : stack1),"button",{"name":"eq","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":29,"column":16},"end":{"line":29,"column":42}}}),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":29,"column":10},"end":{"line":31,"column":17}}})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <a class=\"link-button\" href=\""
    + alias2(alias1(((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\" target=\"_blank\">"
    + alias2(alias1(((stack1 = ((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"text") : stack1)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"output-blocks\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"blocks") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":2,"column":2},"end":{"line":36,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true,"useBlockParams":true});
})();