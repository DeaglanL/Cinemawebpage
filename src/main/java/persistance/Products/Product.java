package persistance.Products;

public class Product {
    private String productid;
    private String name;
    private String price;
    private String type;
    private String qty;
    private String customers_customersid;


    public Product(String productid, String name, String price, String type, String qty, String customers_customersid) {
        this.productid = productid;
        this.name = name;
        this.price = price;
        this.type = type;
        this.qty = qty;
        this.customers_customersid = customers_customersid;
    }


    public String getProductid() {
        return productid;
    }

    public String getName() {
        return name;
    }

    public String getPrice() {
        return price;
    }

    public String getType() {
        return type;
    }

    public String getQty() {
        return qty;
    }

    public String getCustomers_customersid() {
        return customers_customersid;
    }


    public void setProductid(String productid) {
        this.productid = productid;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setQty(String qty) {
        this.qty = qty;
    }

    public void setCustomers_customersid(String customers_customersid) {
        this.customers_customersid = customers_customersid;
    }
}
