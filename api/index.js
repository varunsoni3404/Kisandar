// const express = require('express');
// const mongoose = require('mongoose');  
// const cors = require('cors');
// const app = express();
// const jwt=require('jsonwebtoken');
// const User = require('./models/User.js');
// const cookieParser = require('cookie-parser')
// const VendorOffer = require('./models/VenderOffer')
// const jwtSecret='UIniuhi#@$12'
// const Offer = require('./models/Offer');

// mongoose.connect('mongodb://localhost:27017/farm', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch((err) => console.error('Could not connect to MongoDB:', err));

// app.use(express.json());

// app.use(cookieParser());

// app.use(cors({
//     credentials: true,
//     origin: 'http://localhost:5173'
// }));


// app.get('/test', (req, res) => {
//     res.json('test ok');
// });


// // app.post('/register', async (req, res) => {
// //     try {
// //         const { name, email, password } = req.body;
// //         const userDoc = await User.create({
// //             name,
// //             email,
// //             password
// //         });
// //         res.json(userDoc);
// //     } catch (err) {
// //         if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
// //             // Duplicate email error
// //             res.status(422).json({ error: 'Email already exists' });
// //         } else {
// //             console.error('Error registering user:', err);
// //             res.status(422).json({ error: err.message });
// //         }
// //     }
// // });
// // app.post('/login', async (req, res) => {
// //     const { email, password } = req.body;
// //     try {
// //         const userDoc = await User.findOne({ email, password });
// //         if (userDoc) {
// //             jwt.sign({ email: userDoc.email, 
// //                 id: userDoc._id
// //             }, jwtSecret, {}, (err, token) => {
// //                 if (err) throw err;
// //                 res.cookie('token', token).json(userDoc); 
// //             });
// //         } else {
// //             res.status(401).json({ message: "Invalid email or password" }); 
// //         }
// //     } catch (err) {
// //         res.status(500).json({ message: "Server error" }); 
// //     }
// // });
// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const userDoc = await User.findOne({ email, password });
//         if (userDoc) {
//             jwt.sign(
//                 { email: userDoc.email, id: userDoc._id, role: userDoc.role }, // Include role
//                 jwtSecret,
//                 {},
//                 (err, token) => {
//                     if (err) throw err;
//                     res.cookie('token', token).json({
//                         name: userDoc.name,
//                         email: userDoc.email,
//                         role: userDoc.role // Include role in response
//                     });
//                 }
//             );
//         } else {
//             res.status(401).json({ message: "Invalid email or password" });
//         }
//     } catch (err) {
//         res.status(500).json({ message: "Server error" });
//     }
// });


// app.post('/register', async (req, res) => {
//     try {
//         const { name, email, password, role } = req.body; // Include role
//         const userDoc = await User.create({
//             name,
//             email,
//             password,
//             role // Save role
//         });
//         res.json(userDoc);
//     } catch (err) {
//         if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
//             // Duplicate email error
//             res.status(422).json({ error: 'Email already exists' });
//         } else {
//             console.error('Error registering user:', err);
//             res.status(422).json({ error: err.message });
//         }
//     }
// });

// app.post('/farmer/accept-offer', async (req, res) => {
//     const { offerId } = req.body;
//     try {
//       // Update the offer's status to 'accepted'
//       const offer = await Offer.findByIdAndUpdate(
//         offerId,
//         { status: 'accepted' },
//         { new: true }
//       );
  
//       if (!offer) {
//         return res.status(404).json({ message: 'Offer not found' });
//       }
  
//       res.json({ message: 'Offer accepted successfully!', offer });
//     } catch (error) {
//       console.error('Error accepting offer:', error);
//       res.status(500).json({ message: 'Failed to accept offer.' });
//     }
//   });

//   app.get('/farmer/accepted-offers', async (req, res) => {
//     try {
//       // Fetch only offers with status 'accepted'
//       const offers = await Offer.find({ status: 'accepted' }).populate('vendorId', 'name');
//       res.json(offers);
//     } catch (error) {
//       console.error('Error fetching accepted offers:', error);
//       res.status(500).json({ message: 'Failed to fetch accepted offers.' });
//     }
//   });
  


// // app.get('/profile',(req,res)=>{
// //     const {token}=req.cookies;
// //     if(token){
// //         jwt.verify(token,jwtSecret,{},async (err,userData)=>{
// //             if(err) throw err;
// //             const {name,email,_id} = await User.findById(userData.id)
// //             res.json({name,email,_id})
// //         })
// //     }
// //     else{
// //         res.json(null)
// //     }
    
// // })


// app.get('/profile', (req, res) => {
//     const { token } = req.cookies;
//     if (token) {
//         jwt.verify(token, jwtSecret, {}, async (err, userData) => {
//             if (err) throw err;
//             const user = await User.findById(userData.id);
//             res.json({
//                 name: user.name,
//                 email: user.email,
//                 _id: user._id,
//                 role: user.role // Include role in response
//             });
//         });
//     } else {
//         res.json(null);
//     }
// });

// app.post('/vendor/offer', async (req, res) => {
//     const { crop, price } = req.body;
//     const { token } = req.cookies;

//     if (token) {
//         jwt.verify(token, jwtSecret, {}, async (err, userData) => {
//             if (err) throw err;

//             try {
//                 const offer = await VendorOffer.create({
//                     vendorId: userData.id,
//                     crop,
//                     price
//                 });
//                 res.json(offer);
//             } catch (error) {
//                 res.status(500).json({ error: 'Failed to create offer' });
//             }
//         });
//     } else {
//         res.status(401).json({ error: 'Unauthorized' });
//     }
// });

// // Route to get all offers
// app.get('/vendor/offers', async (req, res) => {
//     try {
//         const offers = await VendorOffer.find().populate('vendorId', 'name');
//         res.json(offers);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to retrieve offers' });
//     }
// });

// // Route to get all vendor offers for farmers
// app.get('/farmer/offers', async (req, res) => {
//     try {
//         const offers = await VendorOffer.find().populate('vendorId', 'name');
//         res.json(offers);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to retrieve offers' });
//     }
// });

// app.post('/farmer/accept-offer', async (req, res) => {
//     const { offerId } = req.body;
//     try {
//       const offer = await Offer.findByIdAndUpdate(
//         offerId,
//         { status: 'accepted' },
//         { new: true }
//       );
  
//       if (!offer) {
//         return res.status(404).json({ message: 'Offer not found' });
//       }
  
//       res.json({ message: 'Offer accepted successfully!', offer });
//     } catch (error) {
//       console.error('Error accepting offer:', error);
//       res.status(500).json({ message: 'Failed to accept offer.' });
//     }
//   });

// app.get('/account',(req,res)=>{
//     res.json('account page pe hai')
// })

// app.post('/logout',(req,res)=>{
//     res.cookie('token','').json(true)
// })

// app.listen(4000, () => {
//     console.log('Server running on http://localhost:4001');
// });




const express = require('express');
const mongoose = require('mongoose');  
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const Offer = require('./models/Offer');
const VendorOffer = require('./models/VendorOffer'); // Ensure correct file name
const cookieParser = require('cookie-parser');

const jwtSecret = 'UIniuhi#@$12';

mongoose.connect('mongodb://localhost:27017/farm', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB:', err));

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

app.get('/test', (req, res) => {
    res.json('test ok');
});

app.post('/register', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const userDoc = await User.create({
            name,
            email,
            password,
            role
        });
        res.json(userDoc);
    } catch (err) {
        if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
            res.status(422).json({ error: 'Email already exists' });
        } else {
            console.error('Error registering user:', err);
            res.status(422).json({ error: err.message });
        }
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userDoc = await User.findOne({ email, password });
        if (userDoc) {
            jwt.sign(
                { email: userDoc.email, id: userDoc._id, role: userDoc.role },
                jwtSecret,
                {},
                (err, token) => {
                    if (err) throw err;
                    res.cookie('token', token).json({
                        name: userDoc.name,
                        email: userDoc.email,
                        role: userDoc.role
                    });
                }
            );
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            const user = await User.findById(userData.id);
            res.json({
                name: user.name,
                email: user.email,
                _id: user._id,
                role: user.role
            });
        });
    } else {
        res.json(null);
    }
});

app.post('/vendor/offer', async (req, res) => {
    const { crop, price, quantity, additionalDetails } = req.body;
    const { token } = req.cookies;

    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) return res.status(401).json({ error: 'Unauthorized' });

            try {
                const offer = await VendorOffer.create({
                    vendorId: userData.id,
                    crop,
                    price,
                    quantity,
                    additionalDetails
                });
                res.json(offer);
            } catch (error) {
                res.status(500).json({ error: 'Failed to create offer' });
            }
        });
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
});

app.get('/vendor/offers', async (req, res) => {
    try {
        const offers = await VendorOffer.find().populate('vendorId', 'name');
        res.json(offers);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve offers' });
    }
});

app.get('/farmer/offers', async (req, res) => {
    try {
        const offers = await VendorOffer.find().populate('vendorId', 'name');
        res.json(offers);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve offers' });
    }
});

app.post('/farmer/accept-offer', async (req, res) => {
    const { offerId } = req.body;
    try {
        // Find the VendorOffer by ID
        const vendorOffer = await VendorOffer.findById(offerId);
        
        if (!vendorOffer) {
            return res.status(404).json({ message: 'Vendor offer not found' });
        }

        // Create a new Offer document with the details from the VendorOffer
        const offer = new Offer({
            crop: vendorOffer.crop,
            price: vendorOffer.price,
            vendorId: vendorOffer.vendorId,
            status: 'accepted'
        });

        await offer.save();

        // Optionally, update the VendorOffer status if you have a status field
        vendorOffer.status = 'accepted'; // If you want to track the status in VendorOffer as well
        await vendorOffer.save();

        res.json({ message: 'Offer accepted and stored successfully!', offer });
    } catch (error) {
        console.error('Error accepting offer:', error);
        res.status(500).json({ message: 'Failed to accept offer.' });
    }
});
app.get('/farmer/accepted-offers', async (req, res) => {
    try {
        const offers = await VendorOffer.find({ status: 'accepted' }).populate('vendorId', 'name');
        res.json(offers);
    } catch (error) {
        console.error('Error fetching accepted offers:', error);
        res.status(500).json({ message: 'Failed to fetch accepted offers.' });
    }
});

//CRUD OPERATIONS
// Update an existing offer
app.put('/vendor/offer/:id', async (req, res) => {
    const { id } = req.params;
    const { crop, price, quantity } = req.body;

    try {
        const updatedOffer = await VendorOffer.findByIdAndUpdate(
            id,
            { crop, price, quantity },
            { new: true }
        );

        if (!updatedOffer) {
            return res.status(404).json({ error: 'Offer not found' });
        }

        res.json(updatedOffer);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update offer' });
    }
});

// Delete an offer
app.delete('/vendor/offer/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedOffer = await VendorOffer.findByIdAndDelete(id);

        if (!deletedOffer) {
            return res.status(404).json({ error: 'Offer not found' });
        }

        res.json({ message: 'Offer deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete offer' });
    }
});


app.post('/logout', (req, res) => {
    res.cookie('token', '').json(true);
});

app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});
