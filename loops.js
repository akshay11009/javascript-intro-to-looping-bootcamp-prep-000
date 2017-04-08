function forLoop(array)
{
  for(let i=0;i<25;i++)  
  {
    if(i===0) {
      array.push('I am 1 strange loop. ');
    }
    else {
        array.push(`I am ${i+1} strange loops. `);
    }
  }
  return array;
}

function whileLoop(countdown)
{
  while(countdown>0)
  {
    console.log(--countdown);
  }
  return 'done';
}

function doWhileLoop(array)
{
  function maybeTrue() {
  return Math.random() >= 0.5
}

  do
  {
      array.pop();
  }while(array.length > 0 && maybeTrue());
  return array;
}