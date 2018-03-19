const user = {
  /* USERS MODEL */
}

const usersGetAll = (cb) => {
  const callback = (err, list) => {
    if(err) return cb(err);

    return cb(null, list);
  };

  user.getAll(callback);
}

exports.user_get = (req, res, next) => {
  usersGetAll((err, list) => {
    if(err) return next();

    return res.send.json({list});
  });
};
