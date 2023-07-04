import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface IProductCardProps {
  name: string;
  description: string;
  image: string;
  price: number;
  slug: string;
}

export default function ProductCard({ name, description, image, price, slug }: IProductCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ minHeight: 50 }}>
          {description}
        </Typography>
        <Typography variant="body2">
          {price}
        </Typography>

        <Link href={`/${slug}`}>
          <Typography variant="body2">
            Detalle
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}