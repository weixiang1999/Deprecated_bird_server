'use strict';

module.exports = app => {
  const { STRING, INTEGER, ENUM, DATE } = app.Sequelize;

  const Package = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    package_name: STRING(50),
    package_price: INTEGER,
    tips: STRING(50),
    type: ENUM('普通套餐'),
    status: ENUM('使用中', '已停用'),
    total_sale_number: INTEGER,
    created_time: DATE,
    changed_time: DATE,
    photo_id: INTEGER,
  });

  return Package;
};
