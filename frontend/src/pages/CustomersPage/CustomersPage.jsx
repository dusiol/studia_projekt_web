import { MainNav } from "@/components/MainNav";

import { fetchCustomers } from "./services/customers";

import { DataTable } from "./components/DataTable";
import { Columns } from "./components/Columns";
import { UserNav } from "./components/UserNav";
import { navigationLinks } from "../../config/navigationLinks";
import { useState, useEffect } from "react";

export const CustomersPage = () => {

  const [customers, setCustomers] = useState([]);
  useEffect(() => {fetchCustomers().then((data) => {setCustomers(data);})})

  const data = customers.map((customer) => {
    return {
      id: customer.id,
      first_name: customer.name,
      surname: customer.surname,
      email: customer.email,
      phoneNumber: customer.phone_number,
    };
  });

  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" links={navigationLinks} />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
        </div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
          <DataTable
            data={data}
            columns={Columns}
          />
        </div>
      </div>
    </div>
  );
};
