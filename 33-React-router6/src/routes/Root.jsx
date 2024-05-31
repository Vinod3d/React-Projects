import { Outlet, Link, useLoaderData, } from "react-router-dom";
import Contact from "./Contact";
import { getContacts, createContact } from "../contacts";


const Root = () => {
    const { contacts } = useLoaderData();
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <form id='search-form' role='search'>
                        <input
                            type='search'
                            id='q'
                            aria-label='Search contacts'
                            placeholder='Search'
                            name='q'
                        />
                        <div
                            id='search-spinner'
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className='sr-only'
                            aria-live='polite'
                        ></div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    {contacts.length ? (
                        <ul>
                            {contacts.map((contact) => (
                                <li key={contact.id}>
                                    <Link to={`contacts/${contact.id}`}>
                                        {contact.first || contact.last ? (
                                            <>
                                                {contact.first} {contact.last}
                                            </>
                                        ) : (
                                            <i>No Name</i>
                                        )}{" "}
                                        {contact.favorite && <span>★</span>}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No contacts</i>
                        </p>
                    )}
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )
}

export default Root

export async function loader() {
    const contacts = await Contact();
    return { contacts };
}