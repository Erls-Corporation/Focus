function() {
  var form = $(this),
    f = form.serializeObject(),
    doc = {
    created_at : new Date(),
    profile : $$("#profile").profile,
    message : f.message,
    state : f.state,
    type : "task"
  };
  $$(form).app.db.saveDoc(doc, {
    success : function(r) {
      $("[name=message]", form).val("");
      $(".saved", form).html('<span>New item: </span><a href="#/details/' + 
                             r.id+'">'+doc.message+'</a> ').show();
      setTimeout(function() { $(".saved", form).slideUp(); }, 3000);
        
    }
  });
  return false;
};