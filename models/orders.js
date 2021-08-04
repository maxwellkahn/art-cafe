const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const artItemSchema = require("./artItemSchema");

const lineItemSchema = new Schema(
  {
    qty: {
      type: Number,
      default: 1,
    },
    item: artItemSchema,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

lineItemSchema.virtual("extPrice").get(function () {
  return this.qty * this.item.price;
});

const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    lineItems: [lineItemSchema],
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

orderSchema.virtual("orderTotal").get(function () {
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual("totalQty").get(function () {
  return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

orderSchema.virtual("orderId").get(function () {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = async function(userId) {
  return this.findOneAndUpdate(
    {user: userId, isPaid: false},
    {user: userId },
    { uspert: true, new: true }
  )
}

module.exports = mongoose.model("Order", orderSchema);