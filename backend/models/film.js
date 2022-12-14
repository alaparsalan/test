const { ASSETS_UPLOAD_URL } = require("../config");

function maskUrl(result) {
  if (result.constructor === Array) {
    var arrayLength = result.length;
    for (var i = 0; i < arrayLength; i++) result[i].photo = ASSETS_UPLOAD_URL + result[i].photo;
  } else result.photo = ASSETS_UPLOAD_URL + result.photo;
  return result;
}

module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define(
    "Film",
    {
      id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, unique: true, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      releaseDate: { type: DataTypes.DATE, allowNull: false },
      rating: { type: DataTypes.INTEGER, allowNull: false },
      ticketPrice: { type: DataTypes.STRING, allowNull: false },
      country: { type: DataTypes.STRING, allowNull: false },
      genre: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
      photo: { type: DataTypes.STRING, allowNull: false },
    },
    {
      hooks: {
        afterFind: maskUrl,
        afterUpdate: maskUrl,
        afterCreate: maskUrl,
      },
    }
  );

  Film.associate = function (models) {
    Film.hasMany(models.Comment, { as: "comments" });
  };
  return Film;
};
