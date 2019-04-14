/*
3．酒吧信息表
（1）主键ID bar_id INT
（2）酒吧名称 bar_name VARCHAR
（3）所在省份+市区 （采用组合码记录）location VARCHAR(50)
（4）备注信息 tips VARCHAR(100)
（5）酒吧状态 status ENUM(运营中，已停用)
（6）酒吧类型 type
*/
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, ENUM, DATE, NOW } = Sequelize;
    await queryInterface.createTable('bars', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      bar_name: STRING(50),
      province: STRING(15),
      city: STRING(15),
      area: { type: STRING(15), defaultValue: '暂无' },
      created_time: { type: DATE, defaultValue: NOW },
      commission_ratio: INTEGER,
      tips: STRING(50),
      type: ENUM('普通酒吧', '测试酒吧'),
      status: ENUM('未开放', '运营中', '已停用'),
      wechat_name: STRING(30),
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('bars');
  },
};
