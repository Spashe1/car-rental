"use strict"
console.log('hello world');
window.onload = function (){
const estimateBtnEl= document.getElementById('EstimateBtn');
estimateBtnEl.onclick =onEstimateBtnClick;

     document.getElementById('radBtn1').onchange = on25OptionChange;
     document.getElementById('radBtn2').onchange = on25OptionChange;

     setDisabledPropertyForOptions(true);
     document.getElementById('pickUpDate').onchange = onDaysOrDateChange;
     document.getElementById('numOfDays').onchange = onDaysOrDateChange;

};

 function onEstimateBtnClick(){
    const numDays = +document.getElementById('numOfDays').value;
    const costPerDay = 29.99;
    
    const baseCost = numDays * costPerDay;

    let extraDailyCost = 0;
    if(document.getElementById('tollTag').checked){
        extraDailyCost += 3.95;
    }
    if(document.getElementById('gps').checked){
        extraDailyCost += 2.95;
    }
    if(document.getElementById('roadsideAssistance').checked){
        extraDailyCost +=2.95;
    }
    const optionsCost = extraDailyCost * numDays;
    let under25Surcharge =0;
    if(document.getElementById('radBtn1').checked){
        under25Surcharge = baseCost * 0.3;
    }
    const totalCost = baseCost + optionsCost + under25Surcharge;
    document.getElementById('baseCost').innerHTML = baseCost.toFixed(2);
    document.getElementById('optionsCost').innerHTML = optionsCost.toFixed(2);
    document.getElementById('under25Surcharge').innerHTML = under25Surcharge.toFixed(2);
    document.getElementById('totaDue').innerHTML = totalCost.toFixed(2);
}

 function on25OptionChange(){
    const row = document.getElementById('under25SurchargeRow');
    if (document.getElementById('radBtn1').checked){
        row.style.display ='table-row';
    }
    else {
        row.style.display = 'none';
    }
 }

 function onDaysOrDateChange() {
    const dateEl = document.getElementById('pickUpDate');
    const daysEl = document.getElementById('numOfDays');
  
    if (dateEl.value === '' || daysEl.value === '') {
      setDisabledPropertyForOptions(true);
    } else {
      setDisabledPropertyForOptions(false);
    }
  }
   function setDisabledPropertyForOptions(isDisabled) {
    document.getElementById('tollTag').disabled = isDisabled;
    document.getElementById('gps').disabled = isDisabled;
    document.getElementById('roadsideAssistance').disabled = isDisabled;
    document.getElementById('radBtn1').disabled = isDisabled;
    document.getElementById('radBtn2').disabled = isDisabled;
  }
























/*
    let tollTagChkBox= document.getElementById('tollTag');
    let gpsChkBox= document.getElementById('gps');
    let roadsideChkBox= document.getElementById('roadsideAssistance');
    let radBtn1 = document.getElementById('radBtn1');
    let radBtn2 = document.getElementById('radBtn2');
    let estimateBtn= document.getElementById('EstimateBtn');
    

    tollTagChkBox.onclick = onTollTagChkBoxClicked;
    gpsChkBox.onclick = onGpsChkBoxClicked;
    roadsideChkBox.onclick = onRoadSideChkBoxClicked;
    radBtn1.onclick= onRadBtn1Clicked;
    radBtn2.onclick= onRadBtn2Clicked;
    estimateBtnEl.onclick =onEstimateBtnClicked;*/
    
