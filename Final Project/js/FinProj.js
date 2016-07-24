"use strict";

var startup = function () {

};

var handlesubmit = function ()

var PurchasePrice = parseInt($("#PurchasePrice"),val());

var LoanAmount = parseInt($("#LoanAmount"),val());

var AnnualIntRate = parseFloat($("#AnnualIntRate"),val());

var LoanTerm = parseInt($("#LoanTerm"),val());

var AnnualPropertyTax = parseFloat($("#AnnualPropertyTax"),val());

var PMI = parseFloat($("#PMI"),val());

var HomeInsurance = parseFloat($("#HomeInsurance"),val());

var MonthlyHOD = parseFloat($("#MonthlyHOD"),val());

var TotalPayment = "#LoanAmount"*["#AnnualIntRate"*(1+"#AnnualIntRate")**"#LoanTerm"]/[(1+"#AnnualIntRate")**"#LoanTerm"-1]

var Answer = $("#Answer");
  Answer.val(TotalPayment);