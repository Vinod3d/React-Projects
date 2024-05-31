import { Form } from "react-router-dom";


const Contact = () => {
  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/408/287",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };
  

  return (
    <div id="contact">
      <div>
        <img
          src={contact.avatar}
          key={contact.avatar}
        />
      </div>
      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )} {" "}
          <Form method="post">
      <button
        name="favorite"
        value={contact.favorite ? "false" : "true"}
        aria-label={
          contact.favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {contact.favorite ? "★" : "☆"}
      </button>
    </Form>
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}


        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  )
}




export default Contact