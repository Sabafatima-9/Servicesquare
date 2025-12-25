const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());

const limiter = rateLimit({ windowMs: 60*1000, max: 30 });
app.use(limiter);

// Serve static site
app.use(express.static(path.join(__dirname)));

// Simple in-memory storage (demo)
const testimonials = [
  {id:1, text:'Quick response — fixed my AC in one visit', name:'R. Kumar'},
  {id:2, text:'Professional technician and clear pricing', name:'S. Priya'}
];
const contacts = [];

app.get('/api/testimonials', (req,res)=>{
  res.json(testimonials);
});

app.post('/api/contact', (req,res)=>{
  const {name, phone, message} = req.body || {};
  if(!name || !phone) return res.status(400).json({error:'name and phone required'});
  const entry = {id:contacts.length+1, name, phone, message, created: new Date().toISOString()};
  contacts.push(entry);
  console.log('New contact request:', entry);
  res.json({ok:true, message:'Request received', entry});
});

app.get('/api/health', (req,res)=>res.json({ok:true}));

app.listen(PORT, ()=>console.log(`SERVICESQUARE server running on http://localhost:${PORT}`));
