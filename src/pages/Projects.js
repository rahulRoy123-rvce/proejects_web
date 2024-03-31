import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from '@material-tailwind/react';
  import India from '../Assets/india.png';
import Africa from '../Assets/africa.png';
  
  import React from 'react';
  
  const Cards = () => {
    return (
        <div className="flex flex-row justify-center">
      <div className="p-4">
        <Card className="mt-6 w-full sm:w-96 md:w-80 lg:w-96 xl:w-96 2xl:w-96 mx-auto">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={India}
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
            India - Odisha & Assam
            </Typography>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </Typography>
            <Typography className="font-bold">
            Southern Asia <br/>
            Lasts 100+ years <br/>
            €140.00 (VAT excluded) <br/>
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Learn more!</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="p-4">
        <Card className="mt-6 w-full sm:w-96 md:w-80 lg:w-96 xl:w-96 2xl:w-96 mx-auto">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={Africa}
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
            Africa - Ghana
            </Typography>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </Typography>
            <Typography className="font-bold">
            Africa <br/>
            Lasts 100+ years <br/>
            €140.00 (VAT excluded) <br/>
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Learn more!</Button>
          </CardFooter>
        </Card>
      </div>
      </div>
    );
  };
  
  export default Cards;
  