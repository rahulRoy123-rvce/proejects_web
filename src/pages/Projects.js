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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center px-16 my-8">
      {cardData.map((card) => (
        <div key={card.id} className="mb-6">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative pb-[60%] mt-2"> {/* Set padding-bottom to control aspect ratio */}
              <img
                src={card.image}
                alt="card-image"
                className="absolute w-full h-full object-cover top-0" // Added absolute positioning
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
