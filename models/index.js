const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Admin = require("./admin.model")(sequelize, Sequelize)
const Seat_type = require("./seat_type.model")(sequelize, Sequelize)
const Venue_type = require("./venue_type.model")(sequelize, Sequelize)
const Human_category = require("./human_category.model")(sequelize, Sequelize)
const Event_type = require("./event_type.model")(sequelize, Sequelize)
const Venue_photo = require("./venue_photo.model")(sequelize, Sequelize)
const Cart = require("./cart.model")(sequelize, Sequelize)
const Ticket = require("./ticket.model")(sequelize, Sequelize)
const Booking = require("./booking.model")(sequelize, Sequelize)
const Customer = require("./customer.model")(sequelize, Sequelize)
const Customer_card = require("./customer_card.model")(sequelize, Sequelize)
const Seat = require("./seat.model")(sequelize, Sequelize)
const Customer_address = require("./customer_address.model")(sequelize, Sequelize)
const Venue = require("./venue.model")(sequelize, Sequelize)
const Event = require("./event.model")(sequelize, Sequelize)
const District = require("./district.model")(sequelize, Sequelize)
const Country = require("./country.model")(sequelize, Sequelize)
const Flat = require("./flat.model")(sequelize, Sequelize)
const Sector = require("./sector.model")(sequelize, Sequelize)
const Gender = require("./gender.model")(sequelize, Sequelize)
const Region = require("./region.model")(sequelize, Sequelize)
const Status = require("./status.model")(sequelize, Sequelize)
const Payment = require("./payment.model")(sequelize, Sequelize)
const Delivery = require("./delivery.model")(sequelize, Sequelize)
const Discount = require("./discount.model")(sequelize, Sequelize)
const Language = require("./language.model")(sequelize, Sequelize)
const Ticket_type = require("./ticket_type.model")(sequelize, Sequelize)


Seat.associate(sequelize.models)
Seat_type.associate(sequelize.models)
Venue.associate(sequelize.models)
Cart.associate(sequelize.models)
Booking.associate(sequelize.models)
Payment.associate(sequelize.models)
Delivery.associate(sequelize.models)
Discount.associate(sequelize.models)
Status.associate(sequelize.models)
Ticket.associate(sequelize.models)
Customer.associate(sequelize.models)
Customer_address.associate(sequelize.models)
Country.associate(sequelize.models)
Region.associate(sequelize.models)
District.associate(sequelize.models)
Customer_card.associate(sequelize.models)
Venue_photo.associate(sequelize.models)
Event.associate(sequelize.models)
Event_type.associate(sequelize.models)
Gender.associate(sequelize.models)
Human_category.associate(sequelize.models)
Ticket_type.associate(sequelize.models)


const models = {
    sequelize,
    Admin,
    Seat_type,
    Venue_type,
    Human_category,
    Event_type,
    Venue_photo,
    Cart,
    Ticket,
    Booking,
    Customer,
    Customer_card,
    Seat,
    Customer_address,
    Venue,
    Event,
    District,
    Country,
    Flat,
    Sector,
    Gender,
    Region,
    Status,
    Payment,
    Delivery,
    Discount,
    Language,
    Ticket_type,
}

module.exports = models