import { Sequelize, Model, INTEGER, STRING, DATE, DOUBLE } from "sequelize";
import { sequelize } from '../../bootstrap/database'

class Movie extends Model {
    public id!: number;
    public title!: string;
    public release_date!: Date;
    public director!: string;
    public genre!: string;
    public rating!: number;
    public duration!: number;
    public language!: string;
    public country!: string;
}

Movie.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
    },
    title: {
        type: STRING,
        allowNull: false,
    },
    release_date: {
        type: DATE,
        allowNull: false,
    },
    director: {
        type: STRING,
        allowNull: false,
    },
    genre: {
        type: STRING,
        allowNull: false,
    },
    rating: {
        type: DOUBLE,
        allowNull: false,
    },
    duration: {
        type: STRING,
        allowNull: false,
    },
    language: {
        type: STRING,
        allowNull: false,
    },
    country: {
        type: STRING,
        allowNull: false,
    }
}, {
    sequelize, modelName: 'movies', timestamps: false, tableName: 'movies'
})

export { Movie }