const pool = require("../utils/database")
const moment = require('moment');

module.exports = {
    getAllData: async () => {
        let connection
        try {
            connection = await pool.getConnection()
            const rows = await connection.query("SELECT * FROM data")
            return rows
        } catch (error) {
            throw error
        } finally {
            if (connection) {
                connection.release()
            }
        }
    },

    getData: async (id) => {
        let connection
        try {
            connection = await pool.getConnection()
            const rows = await connection.query("SELECT * FROM data WHERE id = ?", [id])
            return rows[0]
        } catch (error) {
            throw error
        } finally {
            if (connection) {
                connection.release()
            }
        }
    },

    createData: async (data) => {
        let connection;
        try {
            connection = await pool.getConnection()
            const {
                productID,
                productName,
                amount,
                customerName,
                status,
                transactionDate,
                createBy,
                createOn
            } = data
            const formattedTransactionDate = moment(transactionDate).format('YYYY-MM-DD HH:mm:ss')

            const query = `
                INSERT INTO data (productID, productName, amount, customerName, status, transactionDate, createBy, createOn)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `
            await connection.query(
                query, [
                productID,
                productName,
                amount,
                customerName,
                status,
                formattedTransactionDate,
                createBy,
                createOn
            ]
            )
        } catch (error) {
            throw error
        } finally {
            if (connection) {
                connection.release()
            }
        }
    },

    updateData: async (id, data) => {
        let connection;
        try {
            connection = await pool.getConnection();
            const {
                productID,
                productName,
                amount,
                customerName,
                status,
                transactionDate,
                createBy,
                createOn,
            } = data;
            const query = `
            UPDATE data
            SET productID = ?, productName = ?, amount = ?, customerName = ?, status = ?, transactionDate = ?, createBy = ?, createOn = ?
            WHERE id = ?
          `;
            await connection.query(query, [
                productID,
                productName,
                amount,
                customerName,
                status,
                transactionDate,
                createBy,
                createOn,
                id,
            ]);
        } catch (error) {
            throw error;
        } finally {
            if (connection) {
                connection.release();
            }
        }
    },

    deleteData: async (id) => {
        let connection;
        try {
            connection = await pool.getConnection();
            const query = 'DELETE FROM data WHERE id = ?';
            await connection.query(query, [id]);
        } catch (error) {
            throw error;
        } finally {
            if (connection) {
                connection.release();
            }
        }
    }
}