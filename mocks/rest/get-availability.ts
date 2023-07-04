import { rest } from 'msw'
import products from '../data/products.data'
import { add, differenceInDays, format } from 'date-fns';

/* Available 
  HTTP methods 
    - rest.get
    - rest.put
    - rest.post
    - rest.delete
    - rest.update
  HTTP parameters:
   - example.com/:id
  Access the params in rest.get endpoint or any other http method with req.params
*/
export default rest.get('http://localhost:4000/availability', (req, res, ctx) => {
  const product_id =  req.url.searchParams.get('product_id');
  const start_date =  req.url.searchParams.get('start_date');
  const end_date =  req.url.searchParams.get('end_date');

  const product = products.find((product) => product.id === product_id);
  if (!product) {
      return res(
            ctx.status(404),
            ctx.json({
              message: 'Product not found',
            }),
      );
  } 

   // Get the start and end date from the request params
   const startDate = new Date(start_date);
   const endDate = new Date(end_date);

   // Get the difference in days between the start and end date
   const dateDiff =  differenceInDays(endDate, startDate);

   let availabilityPerDay = [];
   // Create an array with the availability per day
   for(let i = 0; i <= dateDiff; i++) {
    availabilityPerDay.push([{
        date: format(add(startDate, {days: i}), 'yyyy-MM-dd'),
        availability: Math.floor(Math.random() * 11)
    }]);
   }
    return res(
        ctx.status(200),
        ctx.json({
            availability: availabilityPerDay
        }),
    );
});
