function(e) {
  var form = $(this), app = $$(form).app,
    f = form.serializeObject();
  function updateItem(doc) {
    doc.message = f.message;
    doc.state = f.state;
    doc._rev = f._rev;
    doc.blocked = f.blocked == "on";
      console.log(f.published, f);
    doc.publish = f.publish == "on";
    doc.edit_at = new Date();
    doc.edit_by = $$("#account").userCtx.name;
    app.db.saveDoc(doc, {
      success : function(r) {
        Focus.notifyMsg("Updated: "+doc.message);
      }
    });
  };
  app.db.openDoc(f._id, {
    success : function(doc) {
      if (f.owner != doc.profile.name) {
        // get this user's profile from another doc
        app.view("user-created", {
          startkey : [f.owner], 
          limit : 1,
          reduce : false,
          success : function(resp) {
            doc.profile = resp.rows[0].value.profile;
            updateItem(doc);
          }
        });
      } else {
        updateItem(doc);
      }
    }
  });
  return false;
}