"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const puppySchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: false,
    },
    breed: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Puppy", puppySchema);
