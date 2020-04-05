let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]


lblFoods.onclick=function(){
  lstGrp1.clear()
  for (i = 0; i<goodFoods.length; i++)[
    lstGrp1.addItem(goodFoods[i])
    }
}

lstGrp1.onclick=function(){
  lblFoods.value = `You picked ${NSB.$("lstGrp1" + choice).value} + That is a great choice.`
}

BtnNetxtForm.onclick=function(){
  ChangeForm(dessertVoting)
}
