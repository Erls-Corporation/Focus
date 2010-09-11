function(e, params) {

  console.log(arguments);
  
  var app  = $$(this).app,
      list = app.ddoc.evently.items.list.selectors.ul._changes;

  eval("var query = " + list.query + ";");

  var widget = {
    _init : {
      mustache : list.mustache,
      data : list.data,
      query : function() {
        var ul = $(this),
            li = ul.parents("li.user");
        return query({
          data : {
            args : [0,{
              user : params.user,
              state : ul.attr("class").replace(/s/,''),
              focus : true
            }]
          }
        });
      },
      selectors : list.selectors
    }
  };
  
  return {
    "ul.sdone" : widget,
    "ul.snow" : widget,
    "ul.slater" : widget
  };
};