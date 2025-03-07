import databaseQuery from "../database/connectDatabase.js";

class OSRepository {
    // GET ALL
    findAll() {
        const sqlMethod = "SELECT * FROM os_value_table";
        return databaseQuery(sqlMethod);
    }

    // GET BY ID
    findById(id) {
        const sqlMethod = "SELECT * FROM os_value_table WHERE id = ?"
        return databaseQuery(sqlMethod, id)
    }

    // POST
    create(allDatas) {
        const sqlMethod = 'INSERT INTO os_value_table (clientName, employees, osValue) VALUES (?, ?, ?)';
        return databaseQuery(sqlMethod, allDatas);
    }

    // PATCH TO UPDATE FIELDS
    async updateById(id, allDatas) {
        const columnNames = ["clientName", "employees", "osValue"];
        const sqlMethod = `UPDATE os_value_table SET ${columnNames.map((field) => `${field} = ?`).join(', ')} WHERE id = ?`;
        const values = Object.values(allDatas);
        const queryValues = [...values, id];
        return databaseQuery(sqlMethod, queryValues);
    }

    // DELETE A INFRINGEMENT
    deleteById(id) {
        const sqlMethod = "DELETE FROM os_value_table WHERE id = ?";
        return databaseQuery(sqlMethod, [id]);
    }
}

export default new OSRepository();