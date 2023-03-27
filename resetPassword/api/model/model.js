import table from '../Utils/database.js';
import bcrypt from "bcrypt"
class Customers {
    

    static getAllCustomers() {
        // from model => make select all query for Customers
        return table.execute('select * from Customer order by id asc');
    }

    static getCustomerByEmail(email) {
        console.log(email)
        // from model => make select by id
        return table.execute(`select * from user where Email = '${email}'`)
    }

    static updatePassword(data) {
        console.log(`update user set Password = "${data.Password}", ConfirmPassword = "${data.ConfirmPassword}" where Email = '${data.Email}'`)
        // from model => make select by id
        return table.execute(`update user set Password = "${data.Password}", ConfirmPassword = "${data.Password}" where Email = 'Momin.Riaz427@gmail.com'`)
        // return table.execute(`update user set Password =?, ConfirmPassword =? where Email =?`,[data.Password,data.ConfirmPassword,data.Email])
    }

    static async Signup(data) {
      
        let query = `insert into user (Email,Password, ConfirmPassword,EncryptedPassword,CNIC) values ("${data.Email}","${data.Password}","${data.ConfirmPassword}","${await this.hashPassword(data.Password)}","${data.CNIC}")`
      
        return table.execute(query)
    }
    static async Login(data) {
      
        let query = `select * from user where Email ='${data.Email}' `
      
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