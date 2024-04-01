import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';




const Cards = ({ cardData }) => {
  
  return (
    <div className="flex flex-wrap justify-center">
      {cardData.map((card) => (
        <div key={card.id} className="p-4">
          <Card className="mt-6 w-full sm:w-96 md:w-80 lg:w-96 xl:w-96 2xl:w-96 mx-auto">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={card.image}
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {card.title}
              </Typography>
              <Typography>
                {card.description}
              </Typography>
              <Typography className="font-bold">
                {card.details.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Learn more!</Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Cards;
