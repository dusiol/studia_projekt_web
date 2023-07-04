import { MainNav } from "@/components/MainNav";
import { navigationLinks } from "../config/navigationLinks";
import { UserNav } from "./CustomersPage/components/UserNav";
import { useState } from "react";
import { createCustomer } from "./CustomersPage/services/customers";

export const AddCustomerPage = () => {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const submitFormHandler = async (e) => {
    e.preventDefault();
    if (name === "") return;
    if (email === "") return;
    if (phoneNumber === "") return;

    createCustomer(name, surname, email, phoneNumber)

    setName("");
    setSurname("");
    setEmail("");
    setPhoneNumber("");
  };

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
          <h2 className="text-3xl font-bold tracking-tight">Add customer</h2>
        </div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
        <form onSubmit={submitFormHandler} className="addCustomerForm">
        <label>Name: </label>
        <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Jen"/><br/>
        <label>Surname: </label>
        <input onChange={(e) => setSurname(e.target.value)} value={surname} placeholder="Smith"/><br/>
        <label>Email: </label>
        <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="jensmith@gmail.com" /><br/>
        <label>Phone: </label>
        <input maxLength={9} onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} placeholder="666 777 888"/><br/><br/>
        <button type="submit">Submit</button>
      </form>
        </div>
      </div>
    </div>
  );
};
