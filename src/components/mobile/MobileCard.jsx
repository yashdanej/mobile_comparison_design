import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function MobileCard({addMobile, item, key, from, removeMobile}) {
  return (
    <Card sx={{ width: 320, maxWidth: '100%', height: '100%', boxShadow: 'lg' }} className="m-2">
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            height={500}
            src={item.image}
            srcSet={item.image}
            className='object-cover'
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">{item.name}</Typography>
        <Link
          href="#product-card"
          color="neutral"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon />}
          sx={{ fontWeight: 'md' }}
        >
          {item.performance}
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: 'xl' }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          {item.price}
        </Typography>
        <Typography level="body-sm">
          ({item.ram} <b>{item.rear_camera}</b> {item.display}!)
        </Typography>
      </CardContent>
      <CardOverflow>
        {
            from != "home" ?
            <Button onClick={() => addMobile(item)} variant="solid" style={{background: 'black'}} size="lg">
                Compare
            </Button>:
            <Button onClick={() => removeMobile(item)} variant="solid" style={{background: 'black'}} size="lg">
                Remove
            </Button>
        }
      </CardOverflow>
    </Card>
  );
}
