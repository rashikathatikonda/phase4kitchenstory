import React, { useEffect, useState, setState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
const Home = () => {
const [productList, setProductList] = useState([]);
const fetchData = () => {
fetch(`http://localhost:4004/posts`)
.then((response) => response.json())
.then((actualData) => {
console.log(actualData);
setProductList(actualData);
// console.log(productList);
})
.catch((err) => {
console.log(err.message);
});
};
useEffect(() => {
fetchData();
}, []);
const deleteProduct = (id) => {
// setProductList("");
axios.delete(`http://localhost:4004/posts/${id}`) 
.then(res => { 
console.log(res); 
console.log(res.data); 
const posts = this.state.posts.filter(item => item.id !== id); 
setState({ posts }); 
}) 
};
return (
<>
<div className="container mt-3">
<div className="row">
<div className="col-md-12">
<div className="card">
<div className="card-header fs-3 text-center">
All Kitchen Products
{/* {msg && <p className="fs-4 text-center textsuccess">{msg}</p>} */}
</div>
<div className="card-body">
<table className="table">
<thead>
<tr>
<th scope="col">Sl No</th>
<th scope="col">Product Name</th>
<th scope="col">Description</th>
<th scope="col">Price</th>
<th scope="col">Status</th>
<th scope="col">Action</th>
</tr>
</thead>
<tbody>
{productList?.map((p, num) => (
<tr key={p.id}>
{/* <li key={p.id}> */}
<td>{num + 1}</td>
<td>{p.name}</td>
<td>{p.des}</td>
<td>{p.price}</td>
<td>{p.status}</td>
<td>
<button
onClick={() => deleteProduct(p.id)}
className="btn btn-sm btn-danger ms-1">
Delete
</button>
</td>
{/* </li> */}
</tr>
))}
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</>
);
};
export default Home;
