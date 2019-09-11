# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

select p.productName as Product, c.categoryName as Category
from products as p
join categories as c on c.categoryId = p.categoryId

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

select o.orderId, s.shipperName, o.orderDate
from orders as o
join shippers as s on s.shipperId = o.shipperId
where o.orderDate < '1995-08-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

select p.productName, od.quantity
from orderDetails as od
join products as p on p.productId = od.productId
where orderId is 10257
order by p.productName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

select o.orderId as [Order Id], c.customerName as [Customer Name], e.LastName as [Employee Last Name]
from orders as o
join customers as c on o.customerId = c.customerId
join employees as e on o.employeeId = e.employeeId

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 