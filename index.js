import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.render("index.ejs", { notes: notes });
})

app.get("/add", (req, res)=>{
    res.render("new.ejs");
});

app.post("/create", (req, res)=>{
    let subject = `${req.body.subject}`;
    let main = req.body.main;
    notes[subject] = main;
    console.log(notes);
    res.render("index.ejs", { notes: notes });
})

app.get("/delete/:subject", (req, res)=>{
    delete notes[req.params.subject];
    res.render("index.ejs", { notes: notes });
})

app.get("/edit/:subject", (req, res)=>{

})

app.listen(port ,()=>{
    console.log(`Listening on port ${3000}.`);
});

let notes = {};