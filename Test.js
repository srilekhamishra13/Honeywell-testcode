var Test = MyTestFunction(787856,78);

function MyTestFunction(First,Second)
{
if (First === Second) { return true;}
while(First!= 0)
 {
  if (First % 10 == Second)
  {
      return true;
  }
    else 
    {
        First = Math.floor(First/10);
    }
}

return false;
}