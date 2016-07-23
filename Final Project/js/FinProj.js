"use strict";

var PurchasePrice = parseInt($("#PurchasePrice"),val());

var LoanAmount = parseInt($("#LoanAmount"),val());

var AnnualIntRate = parseFloat($("#AnnualIntRate"),val());

var LoanTerm = parseInt($("#LoanTerm"),val());

<select id="PaymentFrequency">
  <option value="12">Monthly</option>
  <option value="24">Semi-Monthly</option>
  <option value="1">Annually</option>
</select>

var AnnualPropertyTax = parseFloat($("#AnnualPropertyTax"),val());

var PMI = parseFloat($("#PMI"),val());

var HomeInsurance = parseFloat($("#HomeInsurance"),val());

var MonthlyHOD = parseFloat($("#MonthlyHOD"),val());

var TotalPayment = "#LoanAmount"*["#AnnualIntRate"*(1+"#AnnualIntRate")**"#LoanTerm"]/[(1+"#AnnualIntRate")**"#LoanTerm"-1]

var Answer = $("#Answer");
  Answer.val(TotalPayment);