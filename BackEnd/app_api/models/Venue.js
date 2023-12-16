const mongoose = require("mongoose");

const OperatingHoursSchema = new mongoose.Schema({
    weekDays: { type: String, required: true },
    openingTime: String,
    closingTime: String, 
    closed: { type: Boolean, required: false }
});

const CustomerFeedbackSchema = new mongoose.Schema({
    reviewer: { type: String, required: true },
    score: { type: Number, min: 0, max: 5, required: true },
    comment: { type: String, required: true },
    feedbackDate: { type: Date, default: Date.now }
});

const EstablishmentSchema = new mongoose.Schema({
    venueName: { type: String, required: true },
    location: String,
    overallRating: { type: Number, min: 0, max: 5, default: 0 },
    geoCoordinates: { type: [Number], index: '2dsphere' },
    offerings: [String],
    operatingHours: [OperatingHoursSchema],
    feedbacks: [CustomerFeedbackSchema]
});


mongoose.model("Venue", Venue, "venues"); 
