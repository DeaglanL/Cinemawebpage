package com.qa.springboot.persistance;


public  class Customer extends CustomerTableController{


private String id;
private String name;
private String address;
private String dob;
private String email;
private String password;
private String phoneno;
private String username;

    public Customer(String id, String name, String address, String dob, String email, String password, String phoneno, String username) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.dob = dob;
        this.email = email;
        this.password = password;
        this.phoneno = phoneno;
        this.username = username;
    }


    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public String getDob() {
        return dob;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getPhoneno() {
        return phoneno;
    }

    public String getUsername() {
        return username;
    }


    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setPhoneno(String phoneno) {
        this.phoneno = phoneno;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
