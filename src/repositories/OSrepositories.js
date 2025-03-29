import databaseQuery from "../database/connectDatabase.js";

class OSRepository {
    // GET ALL
    findAll() {
        const sqlMethod = "SELECT * FROM os_value_table";
        return databaseQuery(sqlMethod);
    }

    // GET ALL PER PAGE
    findPerPage(page) {
        const sqlMethod = "SELECT * FROM os_value_table ORDER BY id DESC LIMIT 6 OFFSET ?";
        return databaseQuery(sqlMethod, page);
    }

    // GET BY ID
    findById(id) {
        const sqlMethod = "SELECT * FROM os_value_table WHERE id = ?"
        return databaseQuery(sqlMethod, id)
    }

    // GET BY CLIENT NAME
    findByPlate(clientName) {
        const sqlMethod = "SELECT * FROM os_value_table WHERE clientName REGEXP ?"
        return databaseQuery(sqlMethod, clientName)
    }

    // POST
    create(allDatas) {
        const sqlMethod = 'INSERT INTO os_value_table (employees, clientName, fullOsValue, toll, feeding, accommodation, degreeOfRisk, materialsValue, fullKM, workedTime, employeesValue) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        return databaseQuery(sqlMethod, allDatas);
    }

    // PATCH TO UPDATE FIELDS
    async updateById(id, allDatas) {
        const columnNames = ["employees", "clientName", "fullOsValue", "toll", "feeding", "accommodation", "degreeOfRisk", "materialsValue", "fullKM", "workedTime", "employeesValue"];
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