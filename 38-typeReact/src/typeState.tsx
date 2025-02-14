import { FormEvent, useState } from "react";

interface Person {
  name: string;
  age: number;
}

function App() {
  const [user, setUser] = useState<Person>({
    name: "",
    age: 0,
  });

  const submitHandler = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(user);
  }

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          {/* Input for the user's name */}
          <input
            type="text"
            value={user.name}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="Enter your name"
          />
          
          {/* Input for the user's age */}
          <input
            type="number"
            value={user.age}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, age: Number(e.target.value) }))
            }
            placeholder="Enter your age"
          />
          <button type="submit">Submit</button>
        </form>

        {/* Displaying user data */}
        <div>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      </div>
    </>
  );
}

export default App;
