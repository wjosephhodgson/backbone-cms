define([
	'backbone'
], function(Backbone) {
	var OrderModel = Backbone.Model.extend({
		defaults: {
			orderDate: '',
			confirmationNumber: '',
			doveNumber: '',
			deliveryDate: '',
			recipientFirstName:'',
			recipientLastName:'',
			recipientAdress:'',
			recipientCity:'',
			recipientState:'',
			recipientZip:'',
			recipientPhoneNumber:'',
			recipientEmail:'',
			occasionCode:'',
			itemId:'',
			itemName:'',
			addOns:'',
			specialInstructions:'',
			cardMessage:'',
			signature:'',
			senderFirstName:'',
			senderLastName: '',
			senderAdress:'',
			senderCity:'',
			senderState:'',
			senderZip:'',
			senderPhoneNumber:'',
			senderEmail:'',
			deliveryMethod:'',
			sourceCode:'',
			promotionCode:'',
			productTotal:'$0.00',
			upsellTotal:'$0.00',
			promotionTotal:'$0.00',
			feeTotal:'$0.00',
			subTotal:'$0.00',
			taxTotal:'$0.00',
			orderTotal:'$0.00',
			paymentType:'',
			creditCardType:'',
			creditCardAccountNumberPayPalEmail:'',
			creditCardExpirationDate: '',
			creditCardName:'',
			giftCardNumber:''
		}
	});

	return OrderModel;
});