package com.qa.springboot.persistance;

import java.sql.*;


public class CustomerTableController {


public CustomerTableController() {
}

public Connection createConnection(String ipAddress, String port, String dbName, String username, String password) {
	Connection myConnection = null;
	System.out.println("-------- MySQL JDBC Connection Testing ------------");
	System.out.println(("jdbc:mysql://" + ipAddress + ":" + port + "/" + dbName + "," + username + "," + password));
	try {
		Class.forName("com.mysql.jdbc.Driver");
	} catch (ClassNotFoundException e) {
		System.out.println("Where is your MySQL JDBC Driver?");
		e.printStackTrace();
		return myConnection;
	}
	
	System.out.println("MySQL JDBC Driver Registered!");
	Connection connection = null;
	
	try {
		connection = DriverManager.getConnection("jdbc:mysql://" + ipAddress + ":" + port + "/" + dbName, username, password);
		
		
	} catch (SQLException e) {
		System.out.println("Connection Failed! Check output console");
		e.printStackTrace();
		return myConnection;
	}
	
	if (connection != null) {
		System.out.println("You made it, take control your database now!");
		myConnection = connection;
	} else {
		System.out.println("Failed to make connection!");
	}
	return myConnection;
}


public void closeConnection(Connection myConnection) {
	try {
		myConnection.close();
	} catch (SQLException e) {
		e.printStackTrace();
	}
}


public void putCustomer(Connection myConnection, String name, String address, String dob, String email, String username, String password, String phoneno) {
	String query = " insert into customers (name, address, dob, email, username, password, phoneno)" + " values (?, ?, ?, ?, ?, ?, ?)";
	PreparedStatement preparedStmt;
	try {
		preparedStmt = myConnection.prepareStatement(query);
		preparedStmt.setString(1, name);
		preparedStmt.setString(2, address);
		preparedStmt.setString(3, dob);
		preparedStmt.setString(4, email);
		preparedStmt.setString(5, username);
		preparedStmt.setString(6, password);
		preparedStmt.setString(7, phoneno);
		preparedStmt.execute();
	} catch (SQLException e) {
		e.printStackTrace();
	}
}


public Customer getCustomerById(int id, Connection myConnection) {
	
	Customer currentCustomer;
	
	String customerId = "";
	String name = "";
	String address = "";
	String dob = "";
	String email = "";
	String username = "";
	String password = "";
	String phoneno = "";
	
	try {
		Statement stmt = myConnection.createStatement();
		ResultSet rs = stmt.executeQuery("select * from customers where customerid = " + "\"" + id + "\"");
		while (rs.next()) {
			customerId = customerId + rs.getString("customerid");
			name = name + rs.getString("name");
			address = address + rs.getString("address");
			dob = dob + rs.getString("dob");
			email = email + rs.getString("email");
			username = username + rs.getString("username");
			password = password + rs.getString("password");
			phoneno = phoneno + rs.getString("phoneno");
		}
		
	} catch (SQLException e) {
		
		e.printStackTrace();
	}
	
	
	currentCustomer = new Customer(customerId, name, address, dob, email, password, phoneno, username);
	
	return currentCustomer;
}


public Customer getCustomerByName(String usernamex, Connection myConnection) {
	
	Customer currentCustomer;
	
	String customerId = "";
	String name = "";
	String address = "";
	String dob = "";
	String email = "";
	String username = "";
	String password = "";
	String phoneno = "";
	
	try {
		Statement stmt = myConnection.createStatement();
		ResultSet rs = stmt.executeQuery("select * from customers where username = " + "\"" + usernamex + "\"");
		while (rs.next()) {
			customerId = customerId + rs.getString("customerid");
			name = name + rs.getString("name");
			address = address + rs.getString("address");
			dob = dob + rs.getString("dob");
			email = email + rs.getString("email");
			username = username + rs.getString("username");
			password = password + rs.getString("password");
			phoneno = phoneno + rs.getString("phoneno");
		}
		
		
	} catch (SQLException e) {
		
		e.printStackTrace();
	}
	
	currentCustomer = new Customer(customerId, name, address, dob, email, password, phoneno, username);
	
	return currentCustomer;
}


public Customer getCustomerByPassword(String passwordx, Connection myConnection) {
	
	Customer currentCustomer;
	
	String customerId = "";
	String name = "";
	String address = "";
	String dob = "";
	String email = "";
	String username = "";
	String password = "";
	String phoneno = "";
	
	try {
		Statement stmt = myConnection.createStatement();
		ResultSet rs = stmt.executeQuery("select * from customers where password = " + "\"" + passwordx + "\"");
		while (rs.next()) {
			customerId = customerId + rs.getString("customerid");
			name = name + rs.getString("name");
			address = address + rs.getString("address");
			dob = dob + rs.getString("dob");
			email = email + rs.getString("email");
			username = username + rs.getString("username");
			password = password + rs.getString("password");
			phoneno = phoneno + rs.getString("phoneno");
		}
		
		
	} catch (SQLException e) {
		
		e.printStackTrace();
	}
	
	currentCustomer = new Customer(customerId, name, address, dob, email, password, phoneno, username);
	
	return currentCustomer;
}


public void removeCustomerById(Connection myConnection, int id) {
	String query = "delete from customers where customerid = ?";
	
	try {
		
		PreparedStatement preparedStmt = myConnection.prepareStatement(query);
		preparedStmt.setInt(1, id);
		preparedStmt.execute();
		
		
	} catch (SQLException e) {
		
		e.printStackTrace();
	}
	
	
}


public void removeCustomerByName(Connection myConnection, String name) {
	String query = "delete from customers where name = ?";
	
	try {
		
		PreparedStatement preparedStmt = myConnection.prepareStatement(query);
		preparedStmt.setString(1, name);
		preparedStmt.execute();
		
		
	} catch (SQLException e) {
		
		e.printStackTrace();
	}
	
	
}

}