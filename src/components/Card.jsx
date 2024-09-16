import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({ data }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={data.name}
        height="140"
        image={`/images/${data.imageSrcName}.png`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={data.viewLink} target="_blank" rel="noopener noreferrer">View</Button>
        <Button size="small" href={data.gitLink} target="_blank" rel="noopener noreferrer">GitHub</Button>
      </CardActions>
    </Card>
  );
}
