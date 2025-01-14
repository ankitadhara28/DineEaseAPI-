let express = require("express");
let cors = require("cors");
let sqlite3 = require("sqlite3").verbose();
let {open} = require("sqlite");

let app = express();
let PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

let db;

(async ()=>{
  db = await open({
    filename:"./BD4_CW/database.sqlite",
    driver:sqlite3.Database,
  });
})();
async function fetchallrest()
{
  let query = "SELECT * FROM restaurants";
  let response = await db.all(query,[]);
  return response;
}
app.get("/restaurants",async(req,res)=>
{
  try{
  let results = await fetchallrest();
  if(results.length===0)
  {
    return res.status(404).json({message:"no restaurants present!"});
  }
  return res.status(200).json(results);
  }
  catch(error)
  {
    res.status(500).json({error:error.message})
  }
})

async function fetchallrestbyid(id)
{
  let query = "SELECT * FROM restaurants where id =?"
  let response = await db.all(query ,[id]);
  return response;
}
app.get("/restaurants/details/:id",async(req,res)=>
{
  try{
  let id = req.params.id;
  let results = await fetchallrestbyid(id);
  if(results.length===0)
  {
    return res.status(404).json({message:"no restaurant present with id "+id});
  }
  return res.status(200).json({restaurants : results})
  }
  catch(error)
  {
    res.status(500).json({error:error.message});
  }
})

async function fetchallrestbycuisine(cuisine)
{
  let query = "SELECT * FROM restaurants where cuisine = ?"
  let response = await db.all(query,[cuisine]);
  return response;
}
app.get("/restaurants/cuisine/:cuisine",async(req,res)=>
{
  try{
  let cuisine = req.params.cuisine;
  let results = await fetchallrestbycuisine(cuisine);
  if(results.length===0)
  {
    return res.status(404).json({message:"no such restaurants exist with this cuisine"});
  }
  return res.status(200).json({restaurants : results});
  }
  catch(error)
  {
    res.status(500).json({error:error.message})
  }
})

async function fetchallrestbyfilter(isVeg , hasOutdoorSeating , isLuxury)
{
  let query = "SELECT * FROM restaurants where isVeg = ? AND hasOutdoorSeating = ? AND isLuxury = ?";
  let response = await db.all(query,[isVeg,hasOutdoorSeating,isLuxury])
  return response;
}
app.get("/restaurants/filter",async(req,res)=>
{
  try{
  let isVeg = req.query.isVeg;
  let hasOutdoorSeating = req.query.hasOutdoorSeating;
  let isLuxury = req.query.isLuxury;
  let results = await fetchallrestbyfilter(isVeg,hasOutdoorSeating,isLuxury);
  if(results.length===0)
  {
  return res.status(404).json({message :"no such restaurants exist with this filters!"});
  }
  return res.status(200).json({restaurants:results});
  }
  catch(error)
  {
    res.status(500).json({error : error.message});
  }
})

async function fetchallrestbydo_rating()
{
  let query = "SELECT * FROM restaurants order by rating desc";
  let response = await db.all(query,[]);
  return response;
}
app.get("/restaurants/sort-by-rating",async(req,res)=>
{
try{
let results = await fetchallrestbydo_rating();
if(results.length===0)
{
  return res.status(404).json({message:"no restaurants present to sort"});
}
return res.status(200).json({restaurants : results});
}
catch(error)
{
res.status(500).json({error:error.message});
}
})

async function fetchalldish()
{
  let query = "SELECT * FROM dishes";
  let response = await db.all(query,[]);
  return response;
}
app.get("/dishes",async(req,res)=>
{
  try{
  let results = await fetchalldish();
  if(results.length===0)
  {
    return res.status(404).json({message:"no dishes present!"});
  }
  return res.status(200).json(results);
  }
  catch(error)
  {
    res.status(500).json({error:error.message})
  }
})

async function fetchalldishby_id(id)
{
  let query = "SELECT * FROM dishes where id = ?";
  let response = await db.all(query,[id]);
  return response;
}
app.get("/dishes/details/:id",async(req,res)=>
{
  try{
  let id = req.params.id;
  let results = await fetchalldishby_id(id);
  if(results.length===0)
  {
    return res.status(404).json({message:"no dishes with this id "+ id+" is present!"});
  }
  return res.status(200).json(results);
  }
  catch(error)
  {
    res.status(500).json({error:error.message})
  }
})

async function fetchalldish_byfilter(isVeg)
{
  let query = "SELECT * FROM dishes where isVeg = ?"
  let response = await db.all(query,[isVeg]);
  return response;
}
app.get("/dishes/filter",async(req,res)=>
{
  try{
  let isVeg = req.query.isVeg;
  let results = await fetchalldish_byfilter(isVeg);
  if(results.length===0)
  {
  return res.status(404).json({message:"no dishes present with the filter "+filter});
  }
  return res.status(200).json({dishes : results});
  }
  catch(error)
  {
  res.status(500).json({error : error.message})
  }
})

async function fetchdish_sortao()
{
  let query = "SELECT * FROM dishes order by price";
  let response = await db.all(query,[]);
  return response;
}
app.get("/dishes/sort-by-price",async(req,res)=>
{
  try{
  let results = await fetchdish_sortao();
  if(results.length===0)
  {
    return res.status(404).json({message:"no dishes present to sort"});
  }
    return res.status(200).json({results});
  }
  catch(error)
  {
    res.status(500).json({error : error.message})
  }
})

app.listen(PORT,()=> console.log("Server running on port 3000"));