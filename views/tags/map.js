function(doc) {
  if (doc.message && doc.created_at &&
      (doc.state === "now" || doc.state === "later")) {
    var words = {};
    doc.message.replace(/\#([\w\-\.]*[\w]+[\w\-\.]*)/g, function(tag, word) {
      words[word.toLowerCase()] = true;
    });
    for (var w in words) {
      emit([w, (doc.edit_at || doc.state_at || doc.created_at)], doc);
    }
  }
}
