function(doc) {
  emit([doc.profile.name, (doc.edit_at || doc.state_at || doc.created_at)], doc);
};
