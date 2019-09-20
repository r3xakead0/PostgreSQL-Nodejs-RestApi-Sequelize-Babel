import Sequelize from "sequelize";
import { sequelize } from "../database/database";

import Task from "./Task";

const Project = sequelize.define('projets', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    deliverydate: {
        type: Sequelize.DATE
    },
});

Project.hasMany(Task, { foreignKey: 'projectId', sourceKey: 'id' });
Task.BelongsTo(Project, { foreignKey: 'projectId', sourceKey: 'id' });

export default Project;