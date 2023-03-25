console.log('person1: shows ticket')
console.log('person2: shows ticket')

const preMovie = async () => 
{
    const promiseWifeBringTicket = new Promise((resolve,reject)=>  { setTimeout(()=> resolve('tick333et'),3000); } )
    const getPopcorn = new Promise((resolve,reject)=> resolve('popcorn'));
   

       let ticket = await promiseWifeBringTicket;
           console.log('wife i hav the tick  '+ ticket)
                 console.log('husband: we should go in')
                      console.log('wife: no i am hungry')

       let popcorn= getPopcorn;
          console.log('husband: i got some popcorn'+ popcorn)
                console.log('husband: we should go in')
                       console.log('wife: i need butter on my popcorn');
                      
 const addButter=new Promise((resolve,reject)=> resolve('butter'));

 const getCandy= new Promise((resolve,reject)=> resolve('candy'))

 const getCoke= new Promise((resolve,reject)=> resolve('coke'));
  let [butter,candy, coke]= await Promise.all([addButter,getCandy,getCoke])

  console.log('husband: this is for u =>   ' + butter +' , '+ candy+" & "+ coke )

    console.log('wife: Thanks lets got we are getting late')
    console.log('husband: thank you for the reminder')

    return ticket;

}

preMovie().then((m)=> console.log( 'person 3 show ' +m))
 
console.log('person4: shows ticket')
console.log('person5: shows ticket')
console.log('person6: shows ticket')