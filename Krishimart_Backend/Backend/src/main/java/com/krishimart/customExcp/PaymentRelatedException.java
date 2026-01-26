package com.krishimart.customExcp;

public class PaymentRelatedException extends RuntimeException {

	public PaymentRelatedException(String msg) {
		super(msg);
	}
}
