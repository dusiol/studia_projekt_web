const API_CUSTOMERS = 'http://localhost:8000/customers'

export const fetchCustomers = () => fetch(API_CUSTOMERS).then(res => res.json());

export const createCustomer = (name, surname, email, phoneNumber) => fetch(API_CUSTOMERS, {
    method: "POST",
    body: JSON.stringify({
          name: name,
          surname: surname,
          email: email,
          phone_number: phoneNumber,
        }),
    headers: { "Content-Type": "application/json" },
  });
  
  