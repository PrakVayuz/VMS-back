const express = require('express');
const mongoose = require('mongoose');
const adminRoutes = require('./routes/adminRoutes');
const vendorRoutes = require('./routes/vendorRoutes');
const jobDescriptionRoutes = require('./routes/jobDescriptionRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const authMiddleware = require('./middlewares/authMiddleware');
const recaptchaMiddleware = require('./middlewares/recaptcha');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Routes Setup
app.use('/admin', adminRoutes);
app.use('/vendor', vendorRoutes);
app.use('/job-description', jobDescriptionRoutes);
app.use('/resume', resumeRoutes);

//Middlewares
app.use(authMiddleware);
app.use(recaptchaMiddleware);


// Connection to MongoDB

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT || 3000, () => console.log('Server running')))
  .catch(err => console.error(err));
