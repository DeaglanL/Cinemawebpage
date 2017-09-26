package Products;

import java.sql.*;

public class ProductTableController {

    public void putProduct(Connection myConnection, String name, String price, String type, String qty, int customers_customersid) {
        String query = " insert into products (name, price, type, qty, customers_customersid)"
                + " values (?,?,?,?,?)";
        PreparedStatement preparedStmt;
        try {
            preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setString (1, name);
            preparedStmt.setString (2, price);
            preparedStmt.setString (3, type);
            preparedStmt.setString(4, qty);
            preparedStmt.setInt (5, customers_customersid);

            preparedStmt.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    public Product getProductById(int id, Connection myConnection){

        Product currentProduct;

        String productid ="";
        String name ="";
        String price ="";
        String type ="";
        String qty ="";
        String customers_customersid ="";



        try {
            Statement stmt = myConnection.createStatement();
            ResultSet rs = stmt.executeQuery("select * from products where productid = " + "\"" + id + "\"");
            while (rs.next()) {
                productid = productid + rs.getString("productid");
                name = name + rs.getString("name");
                price = price + rs.getString("price" );
                type = type + rs.getString("type" );
                qty = qty + rs.getString("qty" );
                customers_customersid = customers_customersid + rs.getString("customers_customersid" );


            }

        } catch (SQLException e) {

            e.printStackTrace();
        }

        currentProduct =  new Product(productid,name,price,type,qty,customers_customersid);
        return currentProduct;
    }


    public  void removeProductById(Connection myConnection,int id) {
        String query = "delete from products where productid = ?";

        try {

            PreparedStatement preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setInt(1, id);
            preparedStmt.execute();


        } catch (SQLException e) {

            e.printStackTrace();
        }


    }
}
