var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   
    for (i=0, i <= dessertList.length - 1; i++)
      drpDesserts.addItem(dessertList[i])
}


drpDesserts.onclick=function(){
   // this 'if' kicks user out if they  just clicked on control 
 // but not on one item in the list.
    if (typeof(s) == "object")   
      return                    
    else {  // the user picked something
        lblDessert.value = `You picked ${drpDesserts.selection}` + `That is a good choice.`
    }
}

Button1.onclick=function(){
  ChangeForm(describeYou)
}
