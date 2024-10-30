const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/database");
const setupSwagger = require("./swagger/swagger")
const adminRoute = require("./routes/adminRoute")
const seat_typeRoute = require("./routes/seat_typeRoute")
const seat = require("./routes/seatRoute")
const venue_typeRoute = require("./routes/venue_typeRoute")
const human_categoryRoute = require("./routes/human_categoryRoute")
const event_typeRoute = require("./routes/event_typeRoute")
const venue_photo = require("./routes/venue_photoRoute")
const cart = require("./routes/cartRoute")
const ticket = require("./routes/ticketRoute")
const booking = require("./routes/bookingRoute")
const customer_card = require("./routes/customer_cardRoute")
const customer = require("./routes/customerRoute")
const customer_address = require("./routes/customer_addressRoute")
const venue = require("./routes/venueRoute")
const event = require("./routes/eventRoute")
const district = require("./routes/districtRoute")
const country = require("./routes/countryRoute")
const flat = require("./routes/flatRoute")
const sector = require("./routes/sectorRoute")
const gender = require("./routes/genderRoute")
const region = require("./routes/regionRoute")
const status = require("./routes/statusRoute")
const payment = require("./routes/paymentRoute")
const delivery = require("./routes/deliveryRoute")
const discount = require("./routes/discountRoute")
const language = require("./routes/languageRoute")
const ticket_type = require("./routes/ticket_typeRotue")


dotenv.config();

const app = express();

app.use(express.json());
app.use("/api", adminRoute);
app.use("/api", seat_typeRoute);
app.use("/api", seat);
app.use("/api", venue_typeRoute);
app.use("/api", human_categoryRoute);
app.use("/api", event_typeRoute);
app.use("/api", venue_photo);
app.use("/api", cart);
app.use("/api", ticket);
app.use("/api", booking);
app.use("/api", customer_card);
app.use("/api", customer);
app.use("/api", customer_address);
app.use("/api", venue);
app.use("/api", event);
app.use("/api", district);
app.use("/api", country);
app.use("/api", flat);
app.use("/api", sector);
app.use("/api", gender);
app.use("/api", region);
app.use("/api", status);
app.use("/api", payment);
app.use("/api", delivery);
app.use("/api", discount);
app.use("/api", language);
app.use("/api", ticket_type);

setupSwagger(app);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(sequelize.models);

        console.log(`Server is running on port ${PORT}`);
    });
});