import table from '../Utils/database.js';
import bcrypt from "bcrypt"
class Customers {
    

    static getAllCustomers() {
        // from model => make select all query for Customers
        return table.execute('select * from Customer order by id asc');
    }

    static getCustomerById(id) {
        // from model => make select by id
        return table.execute(`select * from Customer where id = ${id}`)
    }

    static async postCustomer(data) {
      
        let query = `insert into Customer (Email,Password,EncryptedPassword,Number,Date,CNIC) values ("${data.Email}","${data.Password}","${await this.hashPassword(data.Password)}","${data.Number}","${data.Date}","${data.CNIC}")`
      
        return table.execute(query)
    }

    static putCustomerById(id, data) {
        return table.execute(`update Customer set Email='${data.Email}' where id=${id}`)
    }

    static deleteCustomerById(id) {
        return table.execute(`delete from Customer where id = ${id}`);
    }

     static async hashPassword (pass)  {
      const hash = await bcrypt.hash(pass, 10)
      return hash;
    }
}

export default Customers;