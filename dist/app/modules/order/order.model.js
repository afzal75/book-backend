"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowOrder = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    buyer: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    cow: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Cow",
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.CowOrder = (0, mongoose_1.model)("Order", orderSchema);
