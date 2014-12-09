var name;
var log = new Log();
var that = this;
var hps = require('/themes/store/helpers/assets.js');

for (name in hps) {
    if (hps.hasOwnProperty(name)) {
        that[name] = hps[name];
    }
}

var fn = that.resources;

var resources = function (page, meta) {
    var o = fn(page, meta);

    o.js.push('libs/jquery.slideto.min.js');
    o.js.push('libs/jquery.wiggle.min.js');
    o.js.push('libs/jquery.ba-bbq.min.js');
    o.js.push('libs/underscore-min.js');
    o.js.push('libs/backbone-min.js');
    o.js.push('libs/swagger.js');
    o.js.push('libs/swagger-ui.js');

    o.js.push('logic/assets/assets.js');
    
    o.css.push('cstyles.css');
    return o;
};

var cp = that.currentPage;

var currentPage = function (assetsx,ssox,userx, paging,config, pageIndeces ,leftNav, rightNav) {
  var c = cp(assetsx,ssox,userx, paging, pageIndeces,leftNav,rightNav);
  c.config = config;
  var log = new Log();
  c.pageIndeces = pageIndeces;
  if(leftNav) {
      c.leftNav = leftNav;
  }
  if(rightNav) {
      c.rightNav = rightNav;
  }
  return c;  
};

