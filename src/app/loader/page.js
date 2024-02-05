async function loader() {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();

  return data.users;
}

const Loader = async () => {
  const users = await loader();
  console.log(users);
  return (
    <div>
      <h3>Users details</h3>
      {users.map((value) => (
        <>
          firstname:{value.firstName}
          <br></br>
          lastname:{value.lastName}
          <br></br>
          Age:{value.age}
        </>
      ))}
    </div>
  );
};

export default Loader;


