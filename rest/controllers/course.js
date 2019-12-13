const models = require('../models');

module.exports = {
  get: (req, res, next) => {
    const limit = +req.query.limit;
    if (limit) {
      models.Course.find().populate('teacher').sort({ _id: -1 }).limit(limit)
        .then((courses) => res.send(courses))
        .catch(next);
      return;
    }
    models.Course.find().populate('teacher')
      .then((courses) => res.send(courses))
      .catch(next);
  },

  post: (req, res, next) => {
    const { title, description, teacher:_id } = req.body;
    const { teacher } = req.user;

    models.Course.create({ title, description, teacher: _id })
      .then((createdCourse) => {
        return Promise.all([
          models.User.updateOne({ _id }, { $push: { posts: createdCourse } }),
          models.Course.findOne({ _id: createdCourse._id })
        ]);
      })
      .then(([modifiedObj, courseObj]) => {
        res.send(courseObj);
      })
      .catch(next);
  },

  put: (req, res, next) => {
    const id = req.params.id;
    const { description } = req.body;
    models.Course.updateOne({ _id: id }, { description })
      .then((updatedCourse) => res.send(updatedCourse))
      .catch(next)
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.Course.deleteOne({ _id: id })
      .then((removedCourse) => res.send(removedCourse))
      .catch(next)
  }
};