
const mysql = require("mysql");
const bodyParser = require("body-parser")
const bcrypt = require('bcrypt');

const express = require("express");
const cors=require("cors");
const app = express();
app.use(cors());
const { User } = require("./models")
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "RaNa!001",
  database: "test"
});
con.connect((err) => {
  if (err) {
    console.warn(err)
  } else {
    console.warn("connected!!!")
  }
})

app.use(bodyParser.json());
//app.use(express.json());


app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });

    if (user && bcrypt.compareSync(password, user.password)) {
        res.json({ success: true, message: 'Login successful' ,user});
    } else {
        res.json({ success: false, message: 'Invalid username or password' });
    }
} catch (error) {
    console.error('Error finding user:', error);
    res.json({ success: false, message: 'Internal server error' });
}
})


app.post("/register", async (req, res) => {
  const { name, email, password } = req.body
  try {
    const user = await User.findOne({ where: { email } })
    if (user) {
      return res.json({ success: false, message: 'User already exists' });
    }
    const hashedPassword = bcrypt.hashSync(password, 12);
    await User.create({ name, email, password: hashedPassword });
    res.json({ success: true, message: 'Registration successful' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.json({ success: false, message: 'Internal server error' });
  }
})

con.query("select * from users",(err,result)=>{
  if(err)
  {
    console.warn(err)
  }
  else{
    console.warn(result)
  }
})

app.listen(3000, () => {
  console.log("server in running")
})
