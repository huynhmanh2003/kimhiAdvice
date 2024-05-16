import { useEffect, useState } from "react";

function App() {
  const [token, setBlogs] = useState([]);
  //login
  const fetchProduct = async () => {
    const response = await fetch("http://localhost:4000/blogs");
    const blogs = await response.json();
    setBlogs(blogs.token);
  };
  const tokena  = localStorage.getItem("token")
  console.log(tokena)
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
   12312
    </>
  );
}

export default App;
