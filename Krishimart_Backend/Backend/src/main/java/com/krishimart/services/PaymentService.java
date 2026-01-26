package com.krishimart.services;

import com.krishimart.dto.ApiResp;
import com.krishimart.dto.PaymentReqDTO;

import jakarta.validation.Valid;

public interface PaymentService {

	ApiResp createMyPayment(@Valid PaymentReqDTO dto);

	ApiResp markPaymentPaid(Long orderId);

}
